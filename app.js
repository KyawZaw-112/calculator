let keyPad = document.querySelector(".keypad");

let display = document.querySelector(".display");

let operator = ["+","-","*","/","=","%"];


let filter = x => {
    let current = display.innerText;
    let lastChr = current[current.length-1];

    if (current == "0" && x != ".") {
        clearLast ()
    }

    if (operator.includes(x) && operator.includes(lastChr)) {

        return false;
    }

    return true;
}

let showInDisplay = x => {
    if(filter(x)){
        display.innerText += x
    }
};


let calc= _ => {

    if (!operator.includes(display.innerText[display.innerText.length-1])) {
        display.innerText = eval (display.innerText);
    }

}

keyPad.addEventListener("click", _ => {
    if (display.innerText.length>10) {
        display.style.fontSize = 30 + "px";
    } else if (display.innerText.length>5) {
        display.innerText.style.fontSize = 60 + "px";
    }
})






let clearAll = _ => display.innerText = "0";

let clearLast = _ => display.innerText = display.innerText.substr(0,display.innerText.length-1);
