const $overlay = document.getElementById("overlay")
const $modal = document.getElementById("modal")

window.addEventListener("keydown", e => {
    if(e.keyCode === 69) {
        modalInsert()
    }
})

const audio = new Audio("./click.mp3")
function modalInsert() {
    console.log("click")
    audio.play()
    $overlay.classList.toggle("active")
    $modal.classList.toggle("active")
}
