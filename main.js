"use strict"
console.log('js works');
// date
const thisYear = () => new Date().getFullYear();
// get the element html
let today = document.getElementById('thisOne');
// show it in html
today.innerHTML = thisYear();