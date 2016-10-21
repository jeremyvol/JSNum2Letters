document.querySelector("form").addEventListener("submit", function (e) {
    'use strict';
    console.log(document.getElementById("entry").value);
    document.getElementById("result").textContent = num2letters(document.getElementById("entry").value);
    e.preventDefault();
});