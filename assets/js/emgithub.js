var currentScript = document.currentScript;

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

    // Dynamically adjust padding of pre to fit in the line numbers
    const lineBeginDigit = lineBegin.toString().length;
    const lineEndDigit = lineEnd.toString().length;
    if (lineBeginDigit >= 4 || lineEndDigit >= 4) {
        emgithubPre.style.paddingLeft = "4.5rem";
    } else if (lineBeginDigit >= 3 || lineEndDigit >= 3) {
        emgithubPre.style.paddingLeft = "4rem";
    } else if (lineBeginDigit >= 2 || lineEndDigit >= 2) {
        emgithubPre.style.paddingLeft = "3.5rem";
    }

    emgithubCode.classList.add(`language-${lang}`);
    emgithubCode.textContent = codeText;
    Prism.highlightAllUnder(container, false, () => {
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
    const sourceURL = new URL(currentScript.src);
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

window.addEventListener("DOMContentLoaded", () => {
    embed();
});