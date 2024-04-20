let levelCounter = 1;
let numberOfFaces = 5;
const theLeftSide = document.getElementById("leftSide");
const theRightSide = document.getElementById("rightSide");
function restartGame() {
  window.location.reload();
}
function gameOver() {
  theLeftSide.lastChild.removeEventListener("click", nextLevel);
  document.body.removeEventListener("click", gameOver);
  alert(`Game Over! You got to level ${levelCounter}`);
  const button = document.createElement("button");
  button.onclick = restartGame;
  button.textContent = "Restart Game";
  document.body.appendChild(button);
}
function nextLevel(event) {
  levelCounter++;

  event.stopPropagation();
  while (theLeftSide.lastChild) {
    theLeftSide.removeChild(theLeftSide.lastChild);
  }
  while (theRightSide.lastChild) {
    theRightSide.removeChild(theRightSide.lastChild);
  }
  numberOfFaces += 5;
  generateFaces();
}
function generateFaces() {
  for (i = 0; i < numberOfFaces; i++) {
    const face = document.createElement("img");
    face.src = "../images/bug-bee.gif";
    const randomTop = Math.floor(Math.random() * 400) + 1;
    face.style.top = randomTop + "px";
    const randomLeft = Math.floor(Math.random() * 400) + 1;
    face.style.left = randomLeft + "px";
    theLeftSide.appendChild(face);
  }
  const leftSideImages = theLeftSide.cloneNode(true);
  leftSideImages.removeChild(leftSideImages.lastChild);
  theRightSide.appendChild(leftSideImages);
  theLeftSide.lastChild.addEventListener("click", nextLevel);
  document.body.addEventListener("click", gameOver);
}
