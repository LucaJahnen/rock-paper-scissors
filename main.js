"use strict";
const modal = document.querySelector(".modal");
const rulesButton = document.querySelector(".rules");
const closeButton = document.querySelector(".close");
rulesButton === null || rulesButton === void 0 ? void 0 : rulesButton.addEventListener("click", () => {
    modal === null || modal === void 0 ? void 0 : modal.showModal();
});
closeButton === null || closeButton === void 0 ? void 0 : closeButton.addEventListener("click", () => {
    modal === null || modal === void 0 ? void 0 : modal.close();
});
const cards = document.querySelectorAll(".card");
const wrappers = document.querySelectorAll(".wrapper");
const bgTriangle = document.querySelector(".bg-triangle");
const headings = document.querySelectorAll(".heading");
cards.forEach((card, index) => {
    card.addEventListener("click", () => {
        bgTriangle === null || bgTriangle === void 0 ? void 0 : bgTriangle.style.display = "none";
        cards.forEach((c, i) => {
            index !== i ? c.style.display = "none" : null;
            if (index === i) {
                card.style.left = "33.3%";
                card.style.top = "18vmin";
                wrappers[i].style.transform = "scale(1.5)";
            }
        });
        headings.forEach(heading => {
            heading.style.display = "block";
        });
    });
});
