const openButton = document.querySelectorAll(".openButton");
const dialogBox = document.getElementById("dialogBox");
const closeButton = document.getElementById("closeButton");
const dialogBoxText = document.querySelector("#dialogBox div");

openButton.forEach(button => {
    button.addEventListener("click", () => {
        dialogBox.showModal();
        if (button.innerHTML == "Apples") {
            dialogBoxText.innerHTML = `One apple contains 95 calories!`
        }
        else if (button.innerHTML == "Oranges") {
            dialogBoxText.innerHTML = `One orange contains 45 calories!`
        }
        else if (button.innerHTML == "Bananas") {
            dialogBoxText.innerHTML = `One banana contains 105 calories!`
        }
    });
});

closeButton.addEventListener("click", () => {
    dialogBox.close();
});