let a = document.querySelector(".input");
let b = document.querySelector(".plus");
let c = document.querySelector(".no-tasks-message");
let d = document.querySelector(".tasks-count");
let e = document.querySelector(".tasks-completed");
let f = document.querySelector(".tasks-content");
let k = document.querySelector(".num");

document.querySelector(".checkbox-ios-switch").onclick = function () {
  let i = document.querySelector("body");
  let f = d.querySelector("span");
  i.classList.toggle("blacktheme");
  b.classList.toggle("plus");
  b.classList.toggle("blackthemepls");
};

let myArray = [];
let Array = [];
b.onclick = function addData() {
  let btn = document.createElement("button");
  let div = document.createElement("div");
  let del = c;
  btn.innerHTML = "Delete";
  del.remove();
  let inputValue = a.value;
  div.classList.add("num");
  div.innerText = inputValue;
  div.appendChild(btn);
  f.appendChild(div);
  btn.classList.add("gradient-button");
  myArray.push(a.value);
  d.querySelector("span").innerHTML = myArray.length;
  console.log(myArray);
  div.onclick = function complete() {
    let m = document.querySelector(".num");
    m.style.textDecoration = "line-through";
    Array.push(a.value);
    e.querySelector("span").innerHTML = Array.length;
  };
  btn.onclick = function delData() {
    myArray.pop(a.value);
    div.remove();
    d.querySelector("span").innerHTML = myArray.length;
  };
};
