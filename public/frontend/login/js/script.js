document.addEventListener("DOMContentLoaded", function() {
    const starsContainer = document.querySelector(".stars");
    for (let i = 0; i < 50; i++) {
        let star = document.createElement("div");
        star.classList.add("star");
        let size = Math.random() * 3 + "px";
        let posX = Math.random() * 100 + "vw";
        let posY = Math.random() * 100 + "vh";
        let duration = Math.random() * 5 + 5 + "s";
        star.style.width = size;
        star.style.height = size;
        star.style.left = posX;
        star.style.top = posY;
        star.style.animationDuration = duration;
        starsContainer.appendChild(star);
    }
});

