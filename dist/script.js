"use strict";
const red = "hsl(0, 100%, 67%)";
const grey = "hsl(0, 1%, 44%)";
let showInvalidMessage;
const calculateTimes = (yearIn, monthIn, dayIn) => {
    let timeDifferenceFromNow = new Date().getTime() - new Date(yearIn, monthIn, dayIn).getTime();
    let year = Math.floor(Number(timeDifferenceFromNow) / 31536000000);
    let month = Math.floor((Number(timeDifferenceFromNow) % 31536000000) / 2629746000);
    let day = Math.floor(((Number(timeDifferenceFromNow) % 31536000000) % 2629746000) / 86400000);
    year + month + day;
    console.log(day);
    document.getElementById("outputYearText").textContent = String(year);
    document.getElementById("outputMonthText").textContent = String(month);
    document.getElementById("outputDayText").textContent = String(day);
};
const checkIfValidInputs = () => {
    let dayInputValue = Number(document.getElementById("dayInput").value);
    let monthInputValue = Number(document.getElementById("monthInput").value);
    let yearInputValue = Number(document.getElementById("yearInput").value);
    let invalidInputText = document.getElementById("invalidInputText");
    showInvalidMessage = false;
    if (dayInputValue < 1 || dayInputValue > 31) {
        document.getElementById("dayInput").style.borderColor = red;
        document.getElementById("dayText").style.color = red;
        showInvalidMessage = true;
    }
    else {
        document.getElementById("dayInput").style.borderColor = "#aaaaaa";
        document.getElementById("dayText").style.color = grey;
    }
    if (monthInputValue < 1 || monthInputValue > 12) {
        document.getElementById("monthInput").style.borderColor = red;
        document.getElementById("monthText").style.color = red;
        showInvalidMessage = true;
    }
    else {
        document.getElementById("monthInput").style.borderColor = "#aaaaaa";
        document.getElementById("monthText").style.color = grey;
    }
    if (yearInputValue < 1900 || yearInputValue > 2023) {
        document.getElementById("yearInput").style.borderColor = red;
        document.getElementById("yearText").style.color = red;
        showInvalidMessage = true;
    }
    else {
        document.getElementById("yearInput").style.borderColor = "#aaaaaa";
        document.getElementById("yearText").style.color = grey;
    }
    invalidInputText.style.display = showInvalidMessage ? "flex" : "none";
    if (!showInvalidMessage) {
        calculateTimes(yearInputValue, monthInputValue, dayInputValue);
    }
};
document.getElementById("arrowButtonContainer").addEventListener("click", function () {
    checkIfValidInputs();
});
