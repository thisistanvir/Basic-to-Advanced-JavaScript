let myWindow;

// select dom element
const width = document.getElementById("width");
const height = document.getElementById("height");
const availWidth = document.getElementById("availWidth");
const availHeight = document.getElementById("availHeight");
const colorDepth = document.getElementById("colorDepth");
const pixelDepth = document.getElementById("pixelDepth");

// show document object properties
width.innerHTML = "Screen width is: " + screen.width;
height.innerHTML = "Screen height is: " + screen.height;
availWidth.innerHTML = "Screen availWidth is: " + screen.availWidth;
availHeight.innerHTML = "Screen availHeight is: " + screen.availHeight;
colorDepth.innerHTML = "Screen colorDepth is: " + screen.colorDepth;
pixelDepth.innerHTML = "Screen pixelDepth is: " + screen.pixelDepth;
