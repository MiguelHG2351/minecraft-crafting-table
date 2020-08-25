const $overlay = document.getElementById("overlay")
const $modal = document.getElementById("modal")

window.addEventListener("keydown", e => {
    if(e.keyCode === 69) {
        modalInsert()
    }
})

function modalInsert() {
    $overlay.classList.toggle("active")
    $modal.classList.toggle("active")
}
