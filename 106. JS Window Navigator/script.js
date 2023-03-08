let myWindow;

// select dom element
const appName = document.getElementById("appName");
const appCodeName = document.getElementById("appCodeName");
const product = document.getElementById("product");
const appVersion = document.getElementById("appVersion");
const cookieEnabled = document.getElementById("cookieEnabled");
const userAgent = document.getElementById("userAgent");
const platform = document.getElementById("platform");
const language = document.getElementById("language");
const onLine = document.getElementById("onLine");
const javaEnabled = document.getElementById("javaEnabled");

// show document object properties
appName.innerHTML = "Navigator App Name is: " + navigator.appName;
appCodeName.innerHTML = "Navigator Code Name is: " + navigator.appCodeName;
product.innerHTML = "Navigator Product is: " + navigator.product;
appVersion.innerHTML = "Navigator App Version is: " + navigator.appVersion;
userAgent.innerHTML = "Navigator User Agent is: " + navigator.userAgent;
platform.innerHTML = "Navigator Platform is: " + navigator.platform;
language.innerHTML = "Navigator Language is: " + navigator.language;
onLine.innerHTML = "Navigator Online: " + navigator.onLine;
javaEnabled.innerHTML = "Navigator Java Enable: " + navigator.javaEnabled();
