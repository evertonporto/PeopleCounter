let btn = document.getElementById("increment-btn")
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}

function save() {
    let previousCount = " " + count + " - "
    saveEl.innerHTML += previousCount
    count = 0
}




