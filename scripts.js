const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center=document.querySelector(".center");

//global object i.e, called window;
//window property called getComputedStyle that gives final CSS;

// console.log(window.getComputedStyle(red).backgroundColor);
// console.log(window.getComputedStyle(red).fontFamily);

const getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
};

console.log(getBGColor(red));
console.log(getBGColor(cyan));
console.log(getBGColor(violet));
console.log(getBGColor(orange));
console.log(getBGColor(pink));

var Color = getBGColor(pink);

// pink.addEventListener("click", () => {
//     return center.style.background = Color;
// });

const magicColorChanger= (element, color) => {
   return element.addEventListener("mouseenter", () => {
         center.style.background = color;
   });
};

magicColorChanger(red,getBGColor(red));
magicColorChanger(cyan,getBGColor(cyan));
magicColorChanger(violet,getBGColor(violet));
magicColorChanger(orange,getBGColor(orange));
magicColorChanger(pink,getBGColor(pink));

