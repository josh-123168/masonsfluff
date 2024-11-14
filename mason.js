let masonEl = document.getElementById("mason-count")
let count = 0

function add() {
    count += 1
    masonEl.innerText="You have touched Mason " + count + " times!"
}