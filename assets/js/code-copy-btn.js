import * as clipboard from "clipboard-polyfill/text";

function registerHoverEvent(wrapper, button) {
    wrapper.addEventListener('mouseover', function () {
        button.classList.remove("hidden");
    });
    wrapper.addEventListener('mouseout', function () {
        button.classList.add("hidden");
    });
}

function registerClipboard(button, codeBlock) {
    button.addEventListener('click', function () {
        clipboard.writeText(codeBlock.innerText).then(function () {
            /* Chrome doesn't seem to blur automatically,
               leaving the button in a focused state. */
            button.blur();

            button.innerText = 'Copied!';

            setTimeout(function () {
                button.innerText = 'Copy';
            }, 2000);
        }, function (error) {
            button.innerText = 'Error';
        });
    });
}

window.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('pre > code').forEach(function (codeBlock) {
        var button = document.createElement('button');
        button.className = 'copy-code-button hidden';
        button.type = 'button';
        button.innerText = 'Copy';

        var pre = codeBlock.parentNode;
        if (pre.parentNode.classList.contains('highlight')) {
            var highlight = pre.parentNode;
            highlight.appendChild(button);
            registerHoverEvent(highlight, button);
            registerClipboard(button, codeBlock);
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
                registerClipboard(button, codeBlock);
            }
        } else {
            var wrapper = document.createElement('div');
            wrapper.style = "position: relative;"
            pre.parentNode.insertBefore(wrapper, pre);
            wrapper.appendChild(pre);
            wrapper.appendChild(button);
            registerHoverEvent(wrapper, button);
            registerClipboard(button, codeBlock);
        }
    });
});
