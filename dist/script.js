"use strict";
var moment = require('moment');
const red = "hsl(0, 100%, 67%)";
const grey = "hsl(0, 1%, 44%)";
let showInvalidMessage;
const calculateTimes = (yearIn, monthIn, dayIn) => {
    let starts = moment(yearIn + "-" + monthIn + "-" + dayIn + " 00:00:00");
    let ends = moment();
    var duration = moment.duration(ends.diff(starts));
    console.log(ends);
    document.getElementById("outputYearText").textContent = duration.years();
    document.getElementById("outputMonthText").textContent = duration.months();
    document.getElementById("outputDayText").textContent = duration.days();
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
    if (yearInputValue < 1900 || yearInputValue > 2022) {
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
