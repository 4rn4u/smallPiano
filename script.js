const auddo = new Audio("./sounds/DoGr.mp3");
const audre = new Audio("./sounds/Re.mp3");
const audmi = new Audio("./sounds/Mi.mp3");
const audfa = new Audio("./sounds/Fa.mp3");
const audsol = new Audio("./sounds/Sol.mp3");
const audla = new Audio("./sounds/La.mp3");
const audsi = new Audio("./sounds/Si.mp3");
const audDO = new Audio("./sounds/DoAg.mp3");

const Do = document.querySelectorAll(".do");
const re = document.querySelectorAll(".re");
const mi = document.querySelectorAll(".mi");
const fa = document.querySelectorAll(".fa");
const sol = document.querySelectorAll(".sol");
const la = document.querySelectorAll(".la");
const si = document.querySelectorAll(".si");
const DO = document.querySelectorAll(".DO");

console.log(Do)

Do.forEach((button) => {
    button.addEventListener("click", () => {
        console.log("works")
        auddo.play();
    })});

re.forEach((button) => {
    button.addEventListener("click", () => {
        console.log("works")
        audre.play();
    })});

mi.forEach((button) => {
    button.addEventListener("click", () => {
        console.log("works")
        audmi.play();
    })});

fa.forEach((button) => {
    button.addEventListener("click", () => {
        console.log("works")
        audfa.play();
    })});

sol.forEach((button) => {
    button.addEventListener("click", () => {
        console.log("works")
        audsol.play();
    })});

la.forEach((button) => {
    button.addEventListener("click", () => {
        console.log("works")
        audla.play();
    })});

si.forEach((button) => {
    button.addEventListener("click", () => {
        console.log("works")
        audsi.play();
    })});

DO.forEach((button) => {
    button.addEventListener("click", () => {
        console.log("works")
        audDO.play();
    })});
