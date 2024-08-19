"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const modal = document.querySelector(".modal") || null;
const rulesButton = document.querySelector(".rules");
const closeButton = document.querySelector(".close");
rulesButton === null || rulesButton === void 0 ? void 0 : rulesButton.addEventListener("click", () => {
    modal === null || modal === void 0 ? void 0 : modal.showModal();
});
closeButton === null || closeButton === void 0 ? void 0 : closeButton.addEventListener("click", () => {
    modal === null || modal === void 0 ? void 0 : modal.close();
});
const cards = document.querySelectorAll(".card");
const possibilites = ["paper", "scissors", "rock"];
const main = document.querySelector("main");
const handleClick = (index) => {
    console.log("click");
    let mainHTML;
    if (main) {
        mainHTML = main.innerHTML;
        main.innerHTML = "";
    }
    // prevent a draw
    const housePossibilites = possibilites.filter(item => item !== possibilites[index]);
    const houseChoice = housePossibilites[Math.floor(Math.random() * 2)];
    const wait = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    };
    const getHouseChoice = () => __awaiter(void 0, void 0, void 0, function* () {
        yield wait(2000);
        const houseWrapper = document.querySelector(".house-wrapper");
        if (houseWrapper) {
            houseWrapper.innerHTML += `
            <div class="wrapper" style="transform: translate(4%, -108%) scale(1.5)">
                <button class="card ${houseChoice}" style="left: auto; top: auto">
                    <img src="images/icon-${houseChoice}.svg" alt="">
                </button>
            </div>
            `;
        }
    });
    const el = `
    <div class="choice-wrapper">
        <h2 class="heading you">you picked</h2>
        <div class="wrapper" style="transform: scale(1.5)">
            <button class="card ${possibilites[index]}" style="left: auto; top: auto">
                <img src="images/icon-${possibilites[index]}.svg" alt="">
            </button>
        </div>
    </div>
    <div class="choice-wrapper">
        <h2 class="heading house">the house picked</h2>
        <div class="house-wrapper">
            <div class="circle"></div>
        </div>
    </div>
    `;
    getHouseChoice();
    main === null || main === void 0 ? void 0 : main.insertAdjacentHTML("afterbegin", el);
    if (main) {
        main.style.display = "flex";
        main.style.justifyContent = "center";
        main.style.gap = "10rem";
    }
    const displayResult = () => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const winCondition = {
            "paper,rock": 1,
            "paper,scissors": 0,
            "rock,paper": 0,
            "rock,scissors": 1,
            "scissors,rock": 0,
            "scissors,paper": 1
        };
        const win = winCondition[`${possibilites[index]},${houseChoice}`] === 1;
        yield wait(2300);
        const firstChild = main === null || main === void 0 ? void 0 : main.firstElementChild;
        const message = document.createElement("div");
        message.classList.add("result");
        const buttonReset = () => {
            const button = document.createElement("button");
            button.textContent = "Play Again";
            button.addEventListener("click", () => {
                if (main) {
                    main.innerHTML = mainHTML;
                    main.style.display = "block";
                    document.querySelectorAll(".card").forEach((card, index) => {
                        console.log(card);
                        card.addEventListener("click", () => {
                            handleClick(index);
                        });
                    });
                }
            });
            return button;
        };
        message.innerHTML = `
        <h1>${win ? "You Win" : "You Lose"}</h1>
        `;
        message.appendChild(buttonReset());
        main === null || main === void 0 ? void 0 : main.insertBefore(message, (_a = firstChild === null || firstChild === void 0 ? void 0 : firstChild.nextSibling) !== null && _a !== void 0 ? _a : null);
    });
    displayResult();
};
cards.forEach((card, index) => {
    card.addEventListener("click", () => {
        handleClick(index);
    });
});
