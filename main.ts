const modal = <HTMLElement>document.querySelector(".modal")
const rulesButton = <HTMLElement>document.querySelector(".rules")
const closeButton = <HTMLElement>document.querySelector(".close")

rulesButton?.addEventListener("click", () => {
    modal?.showModal()
})

closeButton?.addEventListener("click", () => {
    modal?.close()
})

const cards = document.querySelectorAll(".card")
const wrappers = document.querySelectorAll(".wrapper")
const bgTriangle = document.querySelector(".bg-triangle")
const headings = document.querySelectorAll(".heading")
const possibilites = ["paper", "scissors", "rock"]
const main = document.querySelector("main")

cards.forEach((card, index) => {
    card.addEventListener("click", async () => {
        main?.innerHTML = ""
        const houseChoice = possibilites[Math.floor(Math.random() * 3)]

        const wait = (ms: number) => {
            return new Promise(resolve => setTimeout(resolve, ms))
        }

        const getHouseChoice = async () => {
            await wait(2000)
            document.querySelector(".house-wrapper")?.innerHTML += `
            <div class="wrapper" style="transform: translate(4%, -104%) scale(calc(28 / 26))">
                <button class="card ${houseChoice}" style="left: auto; top: auto">
                    <img src="images/icon-${houseChoice}.svg" alt="">
                </button>
            </div>
            `
        }

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
        `
        getHouseChoice()
        main?.insertAdjacentHTML("afterbegin", el)
        main?.style.display = "flex"
        main?.style.justifyContent = "center"
        main?.style.gap = "10rem"
    })
})