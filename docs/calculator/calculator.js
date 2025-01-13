// -- History and Memory Functions --

var historybutton = document.getElementById("historybutton");
var historypage = document.getElementById("historymain");
var historyicon = document.getElementById("historyicon");
var memorybutton = document.getElementById("memorybutton");
var memorypage = document.getElementById("memorymain");
var memoryicon = document.getElementById("memoryicon");

// History Button

historybutton.addEventListener('click', ()=>{
    var HistoryDisplay = window.getComputedStyle(historypage).display;
    console.log("The History Button was Clicked, Current Display: " + HistoryDisplay);

    if (HistoryDisplay === "none") {
        // Change the display of the pages
        historypage.style.display = "flex";
        memorypage.style.display = "none";
        // Change which icon appears
        historyicon.style.opacity = "1";
        memoryicon.style.opacity = "0";
        // Text Animation
        setTimeout(() => {
            historytext.style.transform = "translateX(0px)";
            historytext.style.opacity = "1";
        }, 1);
        memorytext.style.transform = "translateX(20px)";
        memorytext.style.opacity = "0";
    }
})

// Memory Button

memorybutton.addEventListener('click', ()=>{
    var MemoryDisplay = window.getComputedStyle(memorypage).display;
    console.log("The Memory Button was Clicked, Current Display: " + MemoryDisplay);

    if (MemoryDisplay === "none") {
        // Change the display of the pages
        memorypage.style.display = "flex";
        historypage.style.display = "none";
        // Change which icon appears
        memoryicon.style.opacity = "1";
        historyicon.style.opacity = "0";
        // Text Animation
        setTimeout(() => {
            memorytext.style.transform = "translateX(0px)";
            memorytext.style.opacity = "1";
        }, 1);
        historytext.style.transform = "translateX(-20px)";
        historytext.style.opacity = "0";
    }
})

// -- Main Calculator Functions -- //

// Output

var display = document.getElementById("display");
let input = String("0");

function updateOutput(value) {
    display.value += value;
}

// Execute Function

function executeFunction() {
    try {
        display.value = eval(display.value);
    } catch (error) {
       display.value = "Error";
    }
}

var execute = document.getElementById("Execute");

execute.addEventListener('click', ()=>{
    console.log("The Execute Button was Clicked");
    executeFunction();
})

// Clear Function

function clearFunction() {
    display.value = "";
}

var clear = document.getElementById("Clear");

clear.addEventListener('click', ()=>{
    console.log("The Clear Button was Clicked");
    clearFunction();
})

// Clear Everything Function

var cleareverything = document.getElementById("ClearEverything");

cleareverything.addEventListener('click', ()=>{
    console.log("The Clear Everything Button was Clicked");
    clearFunction();
})

// Backspace Function

function backspaceFunction() {
    if (display.value === "Error") {
        display.value = "";
    }
    else {
        display.value = display.value.slice(0, -1);
    }
}

var backspace = document.getElementById("Backspace");

backspace.addEventListener('click', ()=>{
    console.log("The Backspace Button was Clicked");
    backspaceFunction();
})

// 0 Button

var zero = document.getElementById("Zero");

function zeroFunction() {
    if (display.value === "0") {
        display.value = "";
    }
    if (display.value === " ") {
        display.value = "";
    }
    if (display.value === "Error") {
        display.value = "";
    }
    else {
        updateOutput("0");
    }
    
}

zero.addEventListener('click', ()=>{
    console.log("The 0 Button was Clicked");
    zeroFunction();
})

// 1 Button

var one = document.getElementById("One");

function oneFunction() {
    updateOutput("1");
}

one.addEventListener('click', ()=>{
    console.log("The 1 Button was Clicked");
    oneFunction();
})

// 2 Button

var two = document.getElementById("Two");

function twoFunction() {
    updateOutput("2");
}

two.addEventListener('click', ()=>{
    console.log("The 2 Button was Clicked");
    twoFunction();
})

// 3 Button

var three = document.getElementById("Three");

function threeFunction() {
    updateOutput("3");
}

three.addEventListener('click', ()=>{
    console.log("The 3 Button was Clicked");
    threeFunction();
})

// 4 Button

function fourFunction() {
    updateOutput("4")
}

var four = document.getElementById("Four");

four.addEventListener('click', ()=>{
    console.log("The 4 Button was Clicked");
    fourFunction();
})

// 5 Button

function fiveFunction() {
    updateOutput("5")
}

var five = document.getElementById("Five");

five.addEventListener('click', ()=>{
    console.log("The 5 Button was Clicked");
    fiveFunction();
})

// 6 Button

function sixFunction() {
    updateOutput ("6")
}

var six = document.getElementById("Six");

six.addEventListener('click', ()=>{
    console.log("The 6 Button was Clicked");
    sixFunction();
})

// 7 Button

function sevenFunction() {
    updateOutput("7")
}

var seven = document.getElementById("Seven");

seven.addEventListener('click', ()=>{
    console.log("The 7 Button was Clicked");
    sevenFunction();
})

// 8 Button

function eightFunction() {
    updateOutput("8")
}

var eight = document.getElementById("Eight");

eight.addEventListener('click', ()=>{
    console.log("The 8 Button was Clicked");
    eightFunction();
})

// 9 Button

function nineFunction() {
    updateOutput("9")
}

var nine = document.getElementById("Nine");

nine.addEventListener('click', ()=>{
    console.log("The 9 Button was Clicked");
    nineFunction();
})

// Decimal Button

var decimal = document.getElementById("Decimal");

decimal.addEventListener('click', ()=>{
    console.log("The Decimal Button was Clicked");
    if (display.value.includes(".")) {
        display.value = display.value;
    }
    else {
        updateOutput(".");
    }
})

// Subtract Button

function subtractFunction() {
    if (display.value.includes("*") || display.value.includes("/") || display.value.includes("+") || display.value.includes("-")) {
        display.value = display.value;
    }
    else {
        updateOutput("-");
    }
}

var subtract = document.getElementById("Subtract");

subtract.addEventListener('click', ()=>{
    console.log("The Subtract Button was Clicked");
    subtractFunction();
})

// Multiply Button

function multiplyFunction() {
    if (display.value.includes("*") || display.value.includes("/") || display.value.includes("+") || display.value.includes("-")) {
        display.value = display.value;
    }
    else {
        updateOutput("*");
    }
}

var multiply = document.getElementById("Multiply");

multiply.addEventListener('click', ()=>{
    console.log("The Multiply Button was Clicked");
    multiplyFunction();
})

// Divide Button

function divideFunction() {
    if (display.value.includes("*") || display.value.includes("/") || display.value.includes("+") || display.value.includes("-")) {
        display.value = display.value;
    }
    else {
        updateOutput("/");
    }
}

var divide = document.getElementById("Divide");

divide.addEventListener('click', ()=>{
    console.log("The Divide Button was Clicked");
    divideFunction();
})

// Add Button

function addFunction() {
    if (display.value.includes("*") || display.value.includes("/") || display.value.includes("+") || display.value.includes("-")) {
        display.value = display.value;
    }
    else {
        updateOutput("+");
    }
}

var add = document.getElementById("Add");

add.addEventListener('click', ()=>{
    console.log("The Add Button was Clicked");
    addFunction();
})

// Squared Button

var squared = document.getElementById("Squared");

squared.addEventListener('click', ()=>{
    console.log("The Squared Button was Clicked");
    display.value = Math.pow(display.value, 2);
})

// Square Root Button

var squareroot = document.getElementById("SquareRoot");

squareroot.addEventListener('click', ()=>{
    console.log("The Square Root Button was Clicked");
    display.value = Math.sqrt(display.value);
})

// 1 Over X Button

var oneoverx = document.getElementById("1overX");

oneoverx.addEventListener('click', ()=>{
    console.log("The 1 Over X Button was Clicked");
    display.value = 1/display.value;
})

// Percentage Button

function percentageFunction() {
    display.value = display.value/100;
}

var percentage = document.getElementById("Percentage");

percentage.addEventListener('click', ()=>{
    console.log("The Percentage Button was Clicked");
    percentageFunction();
})

// Positive Negative Button

var positivenegative = document.getElementById("PlusOrMinus");

positivenegative.addEventListener('click', ()=>{
    console.log("The Positive Negative Button was Clicked");
    display.value = -display.value;
})

// Keypress Support

window.addEventListener('keydown', function(event) {
    if (event.key === "0") {
        zeroFunction();
    }
    if (event.key === "1") {
        oneFunction();
    }
    if (event.key === "2") {
        twoFunction();
    }
    if (event.key === "3") {
        threeFunction();
    }
    if (event.key === "4") {
        fourFunction();
    }
    if (event.key === "5") {
        fiveFunction();
    }
    if (event.key === "6") {
        sixFunction();
    }
    if (event.key === "7") {
        sevenFunction();
    }
    if (event.key === "8") {
        eightFunction();
    }
    if (event.key === "9") {
        nineFunction();
    }
    if (event.key === ".") {
        decimalFunction();
    }
    if (event.key === "+") {
        addFunction();
    }
    if (event.key === "-") {
        subtractFunction();
    }
    if (event.key === "*" || event.key === "x") {
        multiplyFunction();
    }
    if (event.key === "/") {
        divideFunction();
    }
    if (event.key === "%") {
        percentageFunction();
    }
    if (event.key === "Enter") {
        executeFunction();
    }
    if (event.key ==="Backspace") {
        backspaceFunction();
    }
    if (event.key ==="c") {
        clearFunction();
    }
    else {
        display.value = display.value;
    }
})