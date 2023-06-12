const title = document.getElementById("title");
title.innerText = "Got you!";

console.log(title.id);
console.log(title.className);

// const title2 = document.getElementById("hello");
// title2.innerText = "Got you!";

const hellos = document.getElementsByClassName("hello");
console.log(hellos);

const title3 = document.getElementsByTagName("h1");
console.log(title3);

const title4 = document.querySelector(".hello1 h2");
console.log(title4);

const title5 = document.querySelectorAll(".hello1 h2");
console.log(title5);