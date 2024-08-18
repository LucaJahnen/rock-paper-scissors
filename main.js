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
const possibilites = ["paper", "scissors", "rock"];
const main = document.querySelector("main");
cards.forEach((card, index) => {
    card.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
        main === null || main === void 0 ? void 0 : main.innerHTML = "";
        const houseChoice = possibilites[Math.floor(Math.random() * 3)];
        const wait = (ms) => {
            return new Promise(resolve => setTimeout(resolve, ms));
        };
        const getHouseChoice = () => __awaiter(void 0, void 0, void 0, function* () {
            var _a;
            yield wait(2000);
            (_a = document.querySelector(".house-wrapper")) === null || _a === void 0 ? void 0 : _a.innerHTML += `
            <div class="wrapper" style="transform: translate(4%, -104%) scale(calc(28 / 26))">
                <button class="card ${houseChoice}" style="left: auto; top: auto">
                    <img src="images/icon-${houseChoice}.svg" alt="">
                </button>
            </div>
            `;
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
        main === null || main === void 0 ? void 0 : main.style.display = "flex";
        main === null || main === void 0 ? void 0 : main.style.justifyContent = "center";
        main === null || main === void 0 ? void 0 : main.style.gap = "10rem";
    }));
});
