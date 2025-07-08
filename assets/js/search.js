import * as params from '@params';
import uFuzzy from '../lib/js/uFuzzy-v1.0.14.esm.js';

let initing = false;
let inited = false;

async function initIndex() {
    if (initing || inited) {
        return;
    }
    initing = true;

    const defaultContextLen = 100;
    const response = fetch(params.index_url);

    const search_menu_wrapper = document.getElementById("search_menu_wrapper");
    const search_menu_close_btn = document.getElementById("search_menu_close_btn");
    const search_menu_input = document.getElementById("search_menu_input");
    const search_menu_results = document.getElementById("search_menu_results");

    search_menu_close_btn.addEventListener("click", function () {
        search_menu_wrapper.classList.add("hidden");
    });

    const data = await (await response).json();
    const opts = {
        unicode: true,
        interSplit: "[^\\p{L}\\d']+",
        intraSplit: "\\p{Ll}\\p{Lu}",
        intraBound: "\\p{L}\\d|\\d\\p{L}|\\p{Ll}\\p{Lu}",
        intraChars: "[\\p{L}\\d']",
        intraContr: "'\\p{L}{1,2}\\b",
    };
    const uf = new uFuzzy(opts);

    /*
     * data = [{'content': string, 'permalink': string, 'title': string}]
     * => haystack = [title1, content1, title2, content2, ...]
     * 
     * We can use index of haystack to reverse index our data and correctly highlight the matched items
     */
    const haystack = [];
    data.forEach((d) => {
        haystack.push(d['title'], d['content']);
    });

    const createItem = (title, permalink, content) => {
        return `<a href="${permalink}">
                    <div class="search-menu-result-item">
                        <div class="search-menu-result-item-title">${title}</div>
                        <div class="search-menu-result-item-content">${content}</div>
                    </div>
                </a>`;
    };

    const buildAllItems = () => {
        search_menu_results.innerHTML = data.reduce((acc, curr) => {
            let content = (curr.content.length > defaultContextLen) ? curr.content.substring(0, defaultContextLen) + "..." : curr.content;
            return acc + createItem(curr.title, curr.permalink, content);
        }, "");
    };

    const mark = (part) => '<mark>' + part + '</mark>';

    const markMatched = (haystackIdx, ranges) => {
        let marktedText = "";
        const text = haystack[haystackIdx];
        let prevTo = 0;

        for (let i = 0; i < ranges.length; i += 2) {
            let fr = ranges[i];
            let to = ranges[i + 1];

            marktedText = marktedText + text.substring(prevTo, fr) + mark(text.substring(fr, to));

            prevTo = to;
        }

        marktedText = marktedText + text.substring(prevTo, text.length);

        return marktedText;
    }

    const markMatchTruncate = (haystackIdx, ranges) => {
        let markedText = "";
        const text = haystack[haystackIdx];
        const prefixContextLen = 20;
        const suffixContextLen = 100;
        let prevCtxTo = -1, prevTo = -1;

        for (let i = 0; i < ranges.length; i += 2) {
            /*
             * text:---------------------
             *            |   |   |  |
             *            |  fr  to  |
             *          ctxFr      ctxTo
             */
            let ctxFr = Math.max(ranges[i] - prefixContextLen, 0);
            let ctxTo = Math.min(ranges[i + 1] + suffixContextLen, text.length);
            let fr = ranges[i];
            let to = ranges[i + 1];

            if (ctxFr <= prevCtxTo) {
                // add [prevTo, fr) as prefix context
                markedText = markedText + text.substring(prevTo, fr);
            } else {
                // add "..." + [ctxFr, fr) as prefix context
                if (ctxFr !== 0) {
                    markedText = markedText + "...";
                }
                markedText = markedText + text.substring(ctxFr, fr);
            }

            markedText = markedText + mark(text.substring(fr, to));
            prevCtxTo = ctxTo;
            prevTo = to;
        }

        markedText = markedText + text.substring(prevTo, prevCtxTo);
        if (prevCtxTo < text.length) {
            markedText = markedText + "...";
        }

        return markedText;
    }

    const search = (value) => {
        const [_, info, order] = uf.search(haystack, value);
        const orderedMatches = [];
        const matchesMap = new Map();

        if (order !== null) {
            for (let i = 0; i < order.length; i++) {
                const infoIdx = order[i];
                const haystackIdx = info.idx[infoIdx]
                const dataIdx = Math.floor(haystackIdx / 2);
                const dataType = haystackIdx % 2;
    
                if (!matchesMap.has(dataIdx)) {
                    matchesMap.set(dataIdx, orderedMatches.length);
                    const clonedData = { ...data[dataIdx] };
                    if (clonedData['content'].length > defaultContextLen) {
                        clonedData['content'] = clonedData['content'].substring(0, defaultContextLen) + "...";
                    }
                    orderedMatches.push(clonedData);
                }
                const match = orderedMatches[matchesMap.get(dataIdx)];
    
                if (dataType === 0) {
                    match['title'] = markMatched(haystackIdx, info.ranges[infoIdx]);
                } else if (dataType === 1) {
                    match['content'] = markMatchTruncate(haystackIdx, info.ranges[infoIdx]);
                }
            }
        }

        if (orderedMatches.length == 0) {
            search_menu_results.innerHTML = '';
        } else {
            search_menu_results.innerHTML = orderedMatches.reduce((acc, curr) => {
                return acc + createItem(curr.title, curr.permalink, curr.content);
            }, "")
        }
    };

    search_menu_input.addEventListener("input", function () {
        if (this.value === '') {
            buildAllItems();
        } else {
            search(this.value.trim());
        }
    });

    buildAllItems();

    inited = true;
}

window.addEventListener("DOMContentLoaded", () => {
    const search_btn = document.getElementById("search_btn");
    if (search_btn === null) {
        console.warn("Search button not found. Search functionality will not be initialized.");
        return;
    }

    search_btn.addEventListener("click", () => {
        search_menu_wrapper.classList.remove("hidden");
        search_menu_input.focus();
        initIndex();
    });
});
