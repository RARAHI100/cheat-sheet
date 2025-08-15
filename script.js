document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("pre").forEach(pre => {
        const button = document.createElement("button");
        button.innerText = "Copy";
        button.classList.add("copy-btn");

        button.addEventListener("click", () => {
            const code = pre.querySelector("code").innerText;
            navigator.clipboard.writeText(code).then(() => {
                button.innerText = "Copied!";
                setTimeout(() => (button.innerText = "Copy"), 1500);
            });
        });

        pre.style.position = "relative";
        button.style.position = "absolute";
        button.style.top = "10px";
        button.style.right = "10px";
        button.style.padding = "5px 10px";
        button.style.background = "#007BFF";
        button.style.color = "white";
        button.style.border = "none";
        button.style.borderRadius = "3px";
        button.style.cursor = "pointer";

        pre.appendChild(button);
    });
});
