"use strict";

const box = document.querySelectorAll(".box");
const btnReset = document.getElementById("clear");
const grids = document.getElementById("grid");

const clearConfirm = "Are you sure you want to clear this?";
let isMouseDown = false;
let isFilled = false;

function switchMark(e) {
  if (e.classList.contains("filled")) {
    e.classList.replace("filled", "crossed-out");
  } else {
    e.classList.add("filled");
  }
}

box.forEach((element) => {
  element.addEventListener("mousedown", function () {
    isMouseDown = true;
    isFilled = isFilled === false ? true : false;
    switchMark(element);
  });
  element.addEventListener("mouseover", function () {
    if (isMouseDown) {
      if (isFilled) {
        element.classList.add("filled");
      } else {
        element.classList.replace("filled", "crossed-out");
      }
    }
  });
  element.addEventListener("mouseup", function () {
    isMouseDown = false;
  });
});

btnReset.addEventListener("click", function () {
  if (confirm(clearConfirm)) {
    box.forEach((element) => {
      element.classList.remove("filled");
      element.classList.remove("crossed-out");
    });
  }
});
