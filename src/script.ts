const red = "hsl(0, 100%, 67%)";
const grey = "hsl(0, 1%, 44%)";
let showInvalidMessage: Boolean;

const checkIfValidInputs = () => {

    let dayInput = Number((document.getElementById("dayInput") as HTMLInputElement).value);
    let monthInput = Number((document.getElementById("monthInput") as HTMLInputElement).value);
    let yearInput = Number((document.getElementById("yearInput") as HTMLInputElement).value);

    let invalidInputText = (document.getElementById("invalidInputText") as HTMLParagraphElement);

    showInvalidMessage = false;

    if (dayInput < 1 || dayInput > 31) {
        (document.getElementById("dayInput") as HTMLInputElement).style.borderColor = red;
        (document.getElementById("dayText") as HTMLParagraphElement).style.color = red;

        showInvalidMessage = true;
    } else {
        (document.getElementById("dayInput") as HTMLInputElement).style.borderColor = "#aaaaaa";
        (document.getElementById("dayText") as HTMLParagraphElement).style.color = grey;
    }

    if (monthInput < 1 || monthInput > 12) {
        (document.getElementById("monthInput") as HTMLInputElement).style.borderColor = red;
        (document.getElementById("monthText") as HTMLParagraphElement).style.color = red;

        showInvalidMessage = true;
    } else {
        (document.getElementById("monthInput") as HTMLInputElement).style.borderColor = "#aaaaaa";
        (document.getElementById("monthText") as HTMLParagraphElement).style.color = grey;
    }

    if (yearInput < 1900 || yearInput > 2023) {
        (document.getElementById("yearInput") as HTMLInputElement).style.borderColor = red;
        (document.getElementById("yearText") as HTMLParagraphElement).style.color = red;

        showInvalidMessage = true;
    } else {
        (document.getElementById("yearInput") as HTMLInputElement).style.borderColor = "#aaaaaa";
        (document.getElementById("yearText") as HTMLParagraphElement).style.color = grey;
    }

    invalidInputText.style.display = showInvalidMessage ? "flex" : "none";

}

document.getElementById("arrowButtonContainer")!.addEventListener("click", function () {
    checkIfValidInputs();
});