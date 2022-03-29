import * as params from '@params';
import Fuse from '../lib/js/fuse-v6.5.3.min.js';

async function init() {
    const data = fetch(params.index_url);

    const search_btn = document.getElementById("search_btn");
    const search_menu_wrapper = document.getElementById("search_menu_wrapper");
    const search_menu_close_btn = document.getElementById("search_menu_close_btn");
    const search_menu_input = document.getElementById("search_menu_input");
    const search_menu_results = document.getElementById("search_menu_results");

    search_btn.addEventListener("click", function () {
        search_menu_wrapper.classList.remove("hidden");
        search_menu_input.focus();
    });

    search_menu_close_btn.addEventListener("click", function () {
        search_menu_wrapper.classList.add("hidden");
    });

    const index_json = await (await data).json();
    const options = {
        distance: 100,
        threshold: 0.3,
        ignoreLocation: true,
        minMatchCharLength: 2,
        keys: [
            'title',
            'permalink',
            'content',
        ],
        includeMatches: true,
    };
    const fuse = new Fuse(index_json, options);

    const createItem = (title, permalink, content) => {
        return `<a href="${permalink}">
                    <div class="search-menu-result-item">
                        <div class="search-menu-result-item-title">${title}</div>
                        <div class="search-menu-result-item-content">${content}</div>
                    </div>
                </a>`;
    };

    const hlItem = (item, matches) => {
        const highlightTitle = (text, match) => {
            let textHl = "", ptr = 0;
            match.forEach(idx => {
                if (ptr < idx[0]) {
                    textHl += text.substring(ptr, idx[0]);
                }
                textHl += "<mark>" + text.substring(idx[0], idx[1] + 1) + "</mark>";
                ptr = idx[1] + 1;
            })
            textHl += text.substring(ptr, text.length);
            return textHl;
        };

        const highlightContent = (text, match) => {
            let textHl = "<mark>" + text.substring(match[0][0], match[0][1] + 1) + "</mark>";
            let ptr = match[0][1] + 1;
            let length = match[0][1] + 1 - match[0][0];
            if (match[0][0] > 0) {
                textHl = "..." + textHl;
            }
            for (let i = 1; i < match.length; i++) {
                const idx = match[i];
                if (ptr < idx[0] && (length + idx[0] - ptr) >= 100) {
                    textHl += text.substring(ptr, ptr + (100 - length + 1)) + "...";
                    length = 100;
                    break;
                }

                if (ptr < idx[0]) {
                    textHl += text.substring(ptr, idx[0]);
                    length += idx[0] - ptr;
                }
                textHl += "<mark>" + text.substring(idx[0], idx[1] + 1) + "</mark>";
                length += idx[1] + 1 - idx[0];
                ptr = idx[1] + 1;
                if (length >= 100) {
                    break;
                }
            }
            if (length < 100) {
                textHl += text.substring(ptr, ptr + (100 - length));
            }
            if (ptr <= text.length) {
                textHl += "...";
            }
            return textHl;
        }

        let itemHl = {
            title: undefined,
            permalink: item.permalink,
            content: undefined,
        };
        matches.forEach(match => {
            if (match.key == 'title') {
                itemHl.title = highlightTitle(item.title, match.indices);
            } else if (match.key == 'content') {
                itemHl.content = highlightContent(item.content, match.indices);
            }
        });
        if (itemHl.title === undefined) itemHl.title = item.title;
        if (itemHl.content === undefined) itemHl.content = item.content;
        return itemHl;
    }

    const buildAllItems = () => {
        search_menu_results.innerHTML = index_json.reduce((acc, curr) => {
            let content = (curr.content.length > 100) ? curr.content.substring(0, 100) + "..." : curr.content;
            return acc + createItem(curr.title, curr.permalink, content);
        }, "");
    };

    const search = (value) => {
        const results = fuse.search(value);

        if (results.length == 0) {
            search_menu_results.innerHTML = '';
        } else {
            search_menu_results.innerHTML = results.reduce((acc, curr) => {
                const item = hlItem(curr.item, curr.matches);
                return acc + createItem(item.title, item.permalink, item.content);
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
}

window.addEventListener("DOMContentLoaded", init);
