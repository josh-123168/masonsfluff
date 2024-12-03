let move=0
let testEl = document.getElementById("test")
let masonMove = 0
function rock() {
    move=1
    testEl.innerText = move
 }
 function paper() {
    move=2
    testEl.innerText = move
 }
 function scissors() {
    move=3
    testEl.innerText = move
 }
 function play() {

      masonMove = Math.floor(Math.random()*3 + 1)
      testEl.innerText = masonMove

      if(masonMove=move){
        testEl.innerText = "Tie!"
      }
      if(masonMove=)
    }
