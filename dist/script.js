"use strict";
const red = "hsl(0, 100%, 67%)";
const grey = "hsl(0, 1%, 44%)";
let showInvalidMessage;
const checkIfValidInputs = () => {
    let dayInput = Number(document.getElementById("dayInput").value);
    let monthInput = Number(document.getElementById("monthInput").value);
    let yearInput = Number(document.getElementById("yearInput").value);
    let invalidInputText = document.getElementById("invalidInputText");
    showInvalidMessage = false;
    if (dayInput < 1 || dayInput > 31) {
        document.getElementById("dayInput").style.borderColor = red;
        document.getElementById("dayText").style.color = red;
        showInvalidMessage = true;
    }
    else {
        document.getElementById("dayInput").style.borderColor = "#aaaaaa";
        document.getElementById("dayText").style.color = grey;
    }
    if (monthInput < 1 || monthInput > 12) {
        document.getElementById("monthInput").style.borderColor = red;
        document.getElementById("monthText").style.color = red;
        showInvalidMessage = true;
    }
    else {
        document.getElementById("monthInput").style.borderColor = "#aaaaaa";
        document.getElementById("monthText").style.color = grey;
    }
    if (yearInput < 1900 || yearInput > 2023) {
        document.getElementById("yearInput").style.borderColor = red;
        document.getElementById("yearText").style.color = red;
        showInvalidMessage = true;
    }
    else {
        document.getElementById("yearInput").style.borderColor = "#aaaaaa";
        document.getElementById("yearText").style.color = grey;
    }
    invalidInputText.style.display = showInvalidMessage ? "flex" : "none";
};
document.getElementById("arrowButtonContainer").addEventListener("click", function () {
    checkIfValidInputs();
});
