/**
 * Dom Nodes
 *
 */

const para = document.createElement("p"); // <p></p>
const node = document.createTextNode("hello world"); // hello world
para.appendChild(node); // <p>hello world</p>

const element = document.getElementById("div1");
const child = document.getElementById("p1");

// element.appendChild(para);

// before p1 tag
// element.insertBefore(para, child);

// remove element
// element.removeChild(child);

// replace element
element.replaceChild(para, child);
