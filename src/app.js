/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];
  function yo() {
    let randomwho = who[Math.floor(who.length * Math.random())];
    let randomaction = action[Math.floor(who.length * Math.random())];
    let randomwhat = what[Math.floor(who.length * Math.random())];
    let randomwhen = when[Math.floor(who.length * Math.random())];
    const excusaAleatoria = `${randomwho} ${randomaction} ${randomwhat} ${randomwhen}.`;
    return excusaAleatoria;
  }
  let miExcuse = yo();
  let mifrase = document.getElementById("excuse");
  mifrase.innerHTML = miExcuse;
};
