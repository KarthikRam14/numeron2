// Iteration 1: Making the play button in the index.html functional.
// Description: When the play button is clicked the game.html page should be opened

const play = document.getElementById("play-button")
play.addEventListener("click", () => {
    location.href="./game.html"   //vs code can understand without ./ because it is same folder, but git hub understands this command to get into a folder, and if the folder is in different folder as that of the current folder then we use ../
})



