const modal = <HTMLDivElement>document.querySelector(".modal")
const rulesButton = <HTMLButtonElement>document.querySelector(".rules")
const closeButton = <HTMLButtonElement>document.querySelector(".close")

rulesButton?.addEventListener("click", () => {
    modal.style.visibility = "visible"
})

closeButton?.addEventListener("click", () => {
    modal.style.visibility = "hidden"
})

const cards = document.querySelectorAll(".card")
const possibilites = ["paper", "scissors", "rock"]
const main = document.querySelector("main")

if(localStorage.getItem("score") === null) {
    localStorage.setItem("score", JSON.stringify(12))
}


const scoreElement = document.querySelector("nav section h1")
if(scoreElement) {
    const score = localStorage.getItem("score")
    scoreElement.textContent = score ? JSON.parse(score) : "0"
}

const handleClick = (index: number) => {
    console.log("click")
    let mainHTML: string
    if(main) {
        mainHTML = main.innerHTML
        main.innerHTML = ""
    }
    // prevent a draw
    const housePossibilites = possibilites.filter(item => item !== possibilites[index])
    const houseChoice = housePossibilites[Math.floor(Math.random() * 2)]

    const wait = (ms: number) => {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    const getHouseChoice = async () => {
        await wait(2000)
        const houseWrapper = document.querySelector(".house-wrapper")
        if(houseWrapper) {
            houseWrapper.innerHTML += `
            <div class="wrapper" style="transform: translate(4%, -108%) scale(1.5)">
                <button class="card ${houseChoice}" style="left: auto; top: auto">
                    <img src="images/icon-${houseChoice}.svg" alt="">
                </button>
            </div>
            `
        }
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
    if(main) {
        main.style.display = "flex"
        main.style.justifyContent = "center"
        main.style.gap = "10rem"
    }
    
    const displayResult = async () => {
        const winCondition: { [key: string]: number } = {
            "paper,rock": 1,
            "paper,scissors": 0,
            "rock,paper": 0,
            "rock,scissors": 1,
            "scissors,rock": 0,
            "scissors,paper": 1
        }
        const win = winCondition[`${possibilites[index]},${houseChoice}`] === 1
        await wait(2300)
        const firstChild = main?.firstElementChild
        const message = document.createElement("div")
        message.classList.add("result")

        const buttonReset = () => {
            const button = document.createElement("button")
            button.textContent = "Play Again"
            button.addEventListener("click", () => {
                if(main) {
                    main.innerHTML = mainHTML
                    main.style.display = "block"
                    document.querySelectorAll(".card").forEach((card, index) => {
                        console.log(card)
                        card.addEventListener("click", () => {
                            handleClick(index)
                        })
                    })
                }
            })
            return button
        }

        message.innerHTML = `
        <h1>${win ? "You Win" : "You Lose"}</h1>
        `
        message.appendChild(buttonReset())
        main?.insertBefore(message, firstChild?.nextSibling ?? null)
        if(win) {
            const score = localStorage.getItem("score")
            let newScore = score ? JSON.parse(score) : "0"
            newScore++
            localStorage.setItem("score", JSON.stringify(newScore))
        } else {
            const score = localStorage.getItem("score")
            let newScore = score ? JSON.parse(score) : "0"
            newScore--
            localStorage.setItem("score", JSON.stringify(newScore))
        }
        if(scoreElement) {
            const score = localStorage.getItem("score")
            scoreElement.innerHTML = score ? JSON.parse(score).toString() : "0"
        }
    }
    displayResult()
}

cards.forEach((card, index) => {
    card.addEventListener("click", () => {
        handleClick(index)
    })
})