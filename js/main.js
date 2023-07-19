import { renderOutput, renderQuestion, renderBtns } from "./render";

export let current = 0;
const btns = document.querySelectorAll(".tag");
btns.forEach((btn, i) => {
  btn.onclick = () => {
    current = i;
    renderQuestion(current);
    const output = document.querySelector("#output");
    // reset output message following click
    output.innerHTML = "Output:";
  };
});

window.addEventListener("DOMContentLoaded", () => {
  renderBtns();
  renderQuestion();
  renderOutput();
});
