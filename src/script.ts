const red = "hsl(0, 100%, 67%)";
const grey = "hsl(0, 1%, 44%)";
let showInvalidMessage: Boolean;

const calculateTimes = (yearIn: number, monthIn: number, dayIn: number) => {

    let timeDifferenceFromNow: number = new Date().getTime() - new Date(yearIn, monthIn, dayIn).getTime();

    let year = Math.floor(Number(timeDifferenceFromNow) / 31536000000);

    let month = Math.floor((Number(timeDifferenceFromNow) % 31536000000) / 2629746000);

    let day = Math.floor(((Number(timeDifferenceFromNow) % 31536000000) % 2629746000) / 86400000);

    year + month + day;

    console.log(day);

    document.getElementById("outputYearText")!.textContent = String(year);
    document.getElementById("outputMonthText")!.textContent = String(month);
    document.getElementById("outputDayText")!.textContent = String(day);

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

    if (yearInputValue < 1900 || yearInputValue > 2023) {
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