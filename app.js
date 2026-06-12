const items = document.querySelectorAll(".item");

items.forEach(item => {
    const btn = item.querySelector(".title");

    btn.addEventListener("click", () => {

        // 다른 거 닫기 (아코디언 핵심)
        items.forEach(i => {
            if (i !== item) {
                i.classList.remove("active");
                i.querySelector(".content").style.maxHeight = null;
            }
        });

        // 토글
        item.classList.toggle("active");

        const content = item.querySelector(".content");

        if (item.classList.contains("active")) {
            content.style.maxHeight = content.scrollHeight + "px";
        } else {
            content.style.maxHeight = null;
        }
    });
});