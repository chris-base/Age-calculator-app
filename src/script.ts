var moment = require('moment');

const red = "hsl(0, 100%, 67%)";
const grey = "hsl(0, 1%, 44%)";
let showInvalidMessage: Boolean;

const calculateTimes = (yearIn: number, monthIn: number, dayIn: number) => {

    let starts = moment(yearIn + "-" + monthIn + "-" + dayIn + " 00:00:00");

    let ends = moment();

    var duration = moment.duration(ends.diff(starts));

    console.log(ends);

    document.getElementById("outputYearText")!.textContent = duration.years();
    document.getElementById("outputMonthText")!.textContent = duration.months();
    document.getElementById("outputDayText")!.textContent = duration.days();

}

const checkIfValidInputs = () => {

    let dayInputValue = Number((document.getElementById("dayInput") as HTMLInputElement).value);
    let monthInputValue = Number((document.getElementById("monthInput") as HTMLInputElement).value);
    let yearInputValue = Number((document.getElementById("yearInput") as HTMLInputElement).value);

    let invalidInputText = (document.getElementById("invalidInputText") as HTMLParagraphElement);

    showInvalidMessage = false;

    if (dayInputValue < 1 || dayInputValue > 31) {
        (document.getElementById("dayInput") as HTMLInputElement).style.borderColor = red;
        (document.getElementById("dayText") as HTMLParagraphElement).style.color = red;

        showInvalidMessage = true;
    } else {
        (document.getElementById("dayInput") as HTMLInputElement).style.borderColor = "#aaaaaa";
        (document.getElementById("dayText") as HTMLParagraphElement).style.color = grey;
    }

    if (monthInputValue < 1 || monthInputValue > 12) {
        (document.getElementById("monthInput") as HTMLInputElement).style.borderColor = red;
        (document.getElementById("monthText") as HTMLParagraphElement).style.color = red;

        showInvalidMessage = true;
    } else {
        (document.getElementById("monthInput") as HTMLInputElement).style.borderColor = "#aaaaaa";
        (document.getElementById("monthText") as HTMLParagraphElement).style.color = grey;
    }

    if (yearInputValue < 1900 || yearInputValue > 2022) {
        (document.getElementById("yearInput") as HTMLInputElement).style.borderColor = red;
        (document.getElementById("yearText") as HTMLParagraphElement).style.color = red;

        showInvalidMessage = true;
    } else {
        (document.getElementById("yearInput") as HTMLInputElement).style.borderColor = "#aaaaaa";
        (document.getElementById("yearText") as HTMLParagraphElement).style.color = grey;
    }

    invalidInputText.style.display = showInvalidMessage ? "flex" : "none";

    if (!showInvalidMessage) {
        calculateTimes(yearInputValue, monthInputValue, dayInputValue);
    }

}

document.getElementById("arrowButtonContainer")!.addEventListener("click", function () {
    checkIfValidInputs();
});