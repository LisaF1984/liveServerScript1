'use strict'

// let heading = document.querySelector("#heading");
// heading.setAttribute("height","300");
// heading.setAttribute("width","50");

// console.dir(heading);

// //! Create new HTML elements

// let newHeading = document.createElement("h1"); //<h1> </h1>
// let text = document.createTextNode("Calculator"); // We love JavaScript

// newHeading.appendChild(text); // <h1> We love JavaScript </h1>

// //? 1. Grab the DIV from the HTML 
// let divAddToMe = document.querySelector("#heading");

// divAddToMe.appendChild(newHeading);

        let value1Button = document.querySelector("#1btn");
        let value2Button = document.querySelector("#2btn");
        let num1Field = document.querySelector("#num1");
        let num2Field = document.querySelector("#num2");

        value1Button.addEventListener('click',formSubmission);
        value2Button.addEventListener('click',formSubmission);

        let addButton = document.querySelector("#+btn");
        let minusButton = document.querySelector("#-btn");
        let divideButton = document.querySelector("#/btn");
        let multiplyButton = document.querySelector("#*btn");

        addButton.addEventListener('click',formSubmission);
        minus2Button.addEventListener('click',formSubmission);
        divideButton.addEventListener('click',formSubmission);
        multiplyButton.addEventListener('click',formSubmission);

const additon =(num1, num2) => {
    console.log(num1+num2);
}
const subtract =(num1, num2) => {
    console.log(num1-num2);
}
const division =(num1, num2) => {
    console.log(num1/num2);
}
const multiply =(num1, num2) => {
    console.log(num1*num2);
}
