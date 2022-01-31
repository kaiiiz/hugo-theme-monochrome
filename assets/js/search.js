import * as params from '@params';
import {Document} from "flexsearch";

async function init() {
    const data = fetch(params.index_url);

    const search_btn = document.getElementById("search_btn");
    const search_menu_wrapper = document.getElementById("search_menu_wrapper");
    const search_menu_close_btn = document.getElementById("search_menu_close_btn");
    const search_menu_input = document.getElementById("search_menu_input");
    const search_menu_results = document.getElementById("search_menu_results");

    search_btn.addEventListener("click", function () {
        search_menu_wrapper.classList.remove("hidden");
        search_menu_wrapper.classList.add("flex");
        search_menu_input.focus();
    });

    search_menu_close_btn.addEventListener("click", function () {
        search_menu_wrapper.classList.add("hidden");
        search_menu_wrapper.classList.remove("flex");
    });

    const index_json = await (await data).json();
    const items_list = [];

    // create index
    let id = 0;

    const ascii_index = new Document({
        id: "id",
        index: ["title","content"],
        tokenize: 'forward',
        encode: str => str.replace(/[^\x00-\x7F]/g, "").split(" "),
        store: true,
    });
    const nonascii_index = new Document({
        id: "id",
        index: ["title","content"],
        encode: str => str.replace(/[\x00-\x7F]/g, "").split(""),
        store: true,
    });
    index_json.forEach(post => {
        post.id = id++;
        ascii_index.add(post);
        nonascii_index.add(post);
    });

    const createItem = (title, permalink, content) => {
        const item = document.createElement("a");
        item.href = permalink;

        const item_wrapper = document.createElement("div");
        item_wrapper.className = "search-menu-result-item";

        const item_title = document.createElement("div");
        item_title.className = "search-menu-result-item-title";
        item_title.innerHTML = title;

        const item_content = document.createElement("div");
        item_content.className = "search-menu-result-item-content";
        item_content.innerHTML = content;

        item_wrapper.appendChild(item_title);
        item_wrapper.appendChild(item_content);
        item.appendChild(item_wrapper);

        return item;
    };

    const showAllItems = () => {
        items_list.forEach(i => {
            i.classList.remove("hidden");
        });
    };

    const buildAllItems = () => {
        index_json.forEach(index_item => {
            const item = createItem(index_item.title, index_item.permalink, index_item.content);
            search_menu_results.appendChild(item);
            items_list.push(item);
        })
    };

    const search = (value) => {
        let ascii_res = ascii_index.search(value);
        let nonascii_res = nonascii_index.search(value);

        let reduce_res_to_id = (res) => {
            return res.reduce((acc, curr) => {
                curr.result.forEach(x => acc.add(x));
                return acc;
            }, new Set());
        };

        let res_id = new Set([...reduce_res_to_id(ascii_res), ...reduce_res_to_id(nonascii_res)]);

        for (let i = 0; i < items_list.length; i++) {
            if (res_id.has(i)) {
                items_list[i].classList.remove("hidden");
            } else {
                items_list[i].classList.add("hidden");
            }
        }
    };

    search_menu_input.addEventListener("input", function () {
        if (this.value === '') {
            showAllItems();
        } else {
            search(this.value);
        }
    });

    buildAllItems();
}

window.addEventListener("DOMContentLoaded", init);
