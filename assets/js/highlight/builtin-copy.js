function registerHoverEvent(wrapper, button) {
    wrapper.addEventListener('mouseenter', function () {
        button.classList.remove("hidden");
    });
    wrapper.addEventListener('mouseleave', function () {
        button.classList.add("hidden");
    });
}

function registerTouchedEvent(pre, button) {
    pre.addEventListener("touchend", function () {
        if (button.classList.contains("hidden")) {
            button.classList.remove("hidden");
        } else {
            button.classList.add("hidden");
        }
    });
}

function registerClipboard(button, code_block) {
    button.addEventListener('click', async function () {
        try {
            await navigator.clipboard.writeText(code_block.innerText);
            button.blur();
            button.innerText = 'Copied!';
            setTimeout(function () {
                button.innerText = 'Copy';
            }, 2000);
        } catch (e) {
            button.innerText = 'Error';
        }
    });
}

window.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('pre:not(.emgithub-pre) > code').forEach((code_block) => {
        var button = document.createElement('span');
        button.className = 'copy-code-button hidden';
        button.type = 'button';
        button.innerText = 'Copy';

        var pre = code_block.parentNode;
        if (pre.parentNode.classList.contains('highlight')) {
            var highlight = pre.parentNode;
            highlight.appendChild(button);
            registerHoverEvent(highlight, button);
            registerTouchedEvent(pre, button);
            registerClipboard(button, code_block);
        } else if (pre.parentNode.tagName === "TD") {
            // check is line no
            var td = pre.parentNode;
            var tr = td.parentNode;
            if (td === tr.firstChild) {
                return;
            }
            // get highlight block
            var highlight = pre.parentNode;
            while (!highlight.classList.contains('highlight') && highlight.tagName !== 'BODY') {
                highlight = highlight.parentNode;
            }
            if (highlight.tagName !== 'BODY') {
                highlight.appendChild(button);
                registerHoverEvent(highlight, button);
                registerTouchedEvent(pre, button);
                registerClipboard(button, code_block);
            }
        } else {
            var wrapper = document.createElement('div');
            wrapper.style = "position: relative;"
            pre.parentNode.insertBefore(wrapper, pre);
            wrapper.appendChild(pre);
            wrapper.appendChild(button);
            registerHoverEvent(wrapper, button);
            registerTouchedEvent(pre, button);
            registerClipboard(button, code_block);
        }
    });
});
