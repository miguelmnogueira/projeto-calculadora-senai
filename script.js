let displayOperation = document.querySelector("#displayOperation");
let displayNumber = document.querySelector("#displayNumber");

function calculate(operation) {
    let n1 = parseInt(document.querySelector("#n1").value);
    let n2 = parseInt(document.querySelector("#n2").value);
    let res;
    if (!n1 || !n2) return;
    switch (operation) {
        case "plus":
            setDisplayOperation("+");
            res = n1 + n2;
            break;
        case "sub":
            setDisplayOperation("-");
            res = n1 - n2;
            break;
        case "mult":
            setDisplayOperation("x");
            res = n1 * n2;
            break;
        case "div":
            setDisplayOperation("/");
            res = n1 / n2;
            break;
    }
    displayNumber.textContent = res;
}

function setDisplayOperation(signal) {
    displayOperation.textContent = signal;
}
