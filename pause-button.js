const pauseButton = document.querySelector(".pause-button");
pauseButton.addEventListener("click", () => {
    pauseButton.innerText = pauseButton.innerText === "||" ? "▶" : "||";
});