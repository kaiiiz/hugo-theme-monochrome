import * as params from '@params';
import FlexSearch from "flexsearch";

async function init() {
    const data = fetch(params.index_url);

    const search_btn = document.getElementById("search_btn");
    const search_menu = document.getElementById("search_menu");
    const search_menu_close_btn = document.getElementById("search_menu_close_btn");
    const search_menu_input = document.getElementById("search_menu_input");
    const search_menu_results = document.getElementById("search_menu_results");

    search_btn.addEventListener("click", function () {
        search_menu.classList.remove("hidden");
        search_menu.classList.add("flex");
        search_menu_input.focus();
    });

    search_menu_close_btn.addEventListener("click", function () {
        search_menu.classList.add("hidden");
        search_menu.classList.remove("flex");
    });

    const index_json = await (await data).json();

    // create index
    let id = 0;
    const index = new FlexSearch({
        doc: {
            id: "id",
            field: [
                "title",
                "content"
            ]
        },
        profile: "score"
    });
    index_json.forEach(post => {
        post.id = id++;
        index.add(post);
    });

    const createItem = (title, permalink, content) => {
        const item = document.createElement("div");
        item.className = "search-menu-result-item";

        const item_link = document.createElement("a");
        item_link.href = permalink;

        const item_title = document.createElement("div");
        item_title.className = "search-menu-result-item-title";
        item_title.innerHTML = title;

        const item_content = document.createElement("div");
        item_content.className = "search-menu-result-item-content";
        item_content.innerHTML = content;

        item_link.appendChild(item_title);
        item_link.appendChild(item_content);
        item.appendChild(item_link);

        return item;
    };

    const clearAllItems = () => {
        while (search_menu_results.firstChild) {
            search_menu_results.removeChild(search_menu_results.lastChild);
        }
    };

    const buildAllItems = () => {
        clearAllItems();
        index_json.forEach(index_item => {
            const item = createItem(index_item.title, index_item.permalink, index_item.content);
            search_menu_results.appendChild(item);
        })
    };

    const search = (value) => {
        clearAllItems();
        index.search(value).forEach(post => {
            const item = createItem(post.title, post.permalink, post.content);
            search_menu_results.appendChild(item);
        });
    };

    search_menu_input.addEventListener("input", function () {
        if (this.value === '') {
            buildAllItems();
        } else {
            search(this.value);
        }
    });

    buildAllItems();
}

window.addEventListener("DOMContentLoaded", init);
