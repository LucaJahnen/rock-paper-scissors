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

cards.forEach((card, index) => {
    card.addEventListener("click", () => {
        bgTriangle?.style.display = "none"
        cards.forEach((c, i) => {
            index !== i ? c.style.display = "none" : null
            if (index === i) {
                card.style.left = "33.3%"
                card.style.top = "18vmin"
                wrappers[i].style.transform = "scale(1.5)"
            }
        })
        headings.forEach(heading => {
            heading.style.display = "block"
        })
    })
})