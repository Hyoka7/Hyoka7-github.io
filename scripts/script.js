document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const toggleBtn = document.querySelector(".toggle-btn");
    const closeBtn = document.querySelector(".close-btn");

    toggleBtn.addEventListener("click", function () {
        sidebar.classList.toggle("open");
    });

    closeBtn.addEventListener("click", function () {
        sidebar.classList.remove("open");
    });

    const hello = "Welcome to Hyoka7's Homepage";
    const guide = `Hyoka7のホームページへようこそ。右上のボタンからコンテンツを選択してください。`;
    const target = document.getElementById("greeting");
    const cursor = document.createElement("span");
    cursor.classList.add("cursor");
    cursor.textContent = "|";
    target.textContent = "";
    target.appendChild(cursor);
    let currentText = "";

    for (let i = 0; i < hello.length; i++) {
        let delay = Math.random();
        setTimeout(() => {
            currentText += hello[i];
            target.textContent = currentText;
            target.appendChild(cursor);
        }, i * 100 + delay * 100);
    }

    setTimeout(() => {
        target.textContent = currentText;


        const textElement = document.createElement("div");
        textElement.innerHTML = guide;
        textElement.style.fontFamily = "Arial, sans-serif";
        textElement.style.color = "white";
        textElement.style.fontSize = "20px";
        textElement.style.marginTop = "20px";
        textElement.style.opacity = 0;

        target.appendChild(textElement);

        setTimeout(() => {
            textElement.style.transition = "opacity 2s";
            textElement.style.opacity = 1;
        }, 200);
    }, hello.length * 100 + 200);
});
