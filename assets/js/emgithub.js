Prism.plugins.autoloader.languages_path = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.27.0/components/';
embed();

function removeMask (container) {
    const emgithubPre = container.querySelector(".emgithub-pre");
    const emgithubLoading = container.querySelector(".emgithub-loading");
    emgithubLoading.classList.add("hide");
    emgithubPre.classList.remove("hide");
    emgithubPre.classList.remove("loading");
}

function embedTextToEle (codeText, container, lang, lineBegin, lineEnd) {
    const emgithubPre = container.querySelector(".emgithub-pre");
    const emgithubCode = document.createElement("code");
    emgithubPre.appendChild(emgithubCode);

    if (lineBegin > 0) {
        const codeTextSplit = codeText.split("\n");
        codeText = codeTextSplit.slice(lineBegin - 1, lineEnd).join("\n") + '\n';
    }
    emgithubCode.classList.add(`language-${lang}`);
    emgithubCode.textContent = codeText;
    Prism.highlightAllUnder(container, true, () => {
        requestAnimationFrame(() => {
            removeMask(container);
        })
    });
}

function embedErrorToEle (errText, container) {
    const emgithubPre = container.querySelector(".emgithub-code .emgithub-pre");
    const emgithubCode = document.createElement("code");
    emgithubPre.appendChild(emgithubCode);

    emgithubPre.classList.remove("line-numbers");
    emgithubPre.classList.add("no-line-numbers");
    emgithubCode.textContent = errText;

    removeMask(container);
}

async function embed () {
    const sourceURL = new URL(document.currentScript.src);
    const params = sourceURL.searchParams;
    const rawFileURL = new URL(params.get("raw_file_url"));
    const lang = params.get("lang");
    const id = params.get("id");
    const lineBegin = Number(params.get("line_begin"));
    const lineEnd = Number(params.get("line_end"));

    const emgithubContainer = document.getElementById(id);
    const response = await fetch(rawFileURL);
    if (response.ok) {
        const text = await response.text();
        embedTextToEle(text, emgithubContainer, lang, lineBegin, lineEnd);
    } else {
        embedErrorToEle(`Failed to process ${rawFileURL}\n${response.status}`, emgithubContainer);
    }
}
