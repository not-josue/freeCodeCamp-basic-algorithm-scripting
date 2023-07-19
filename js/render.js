import { data } from "./data";
import { current } from "./main";

// displays buttons
function renderBtns() {
  const btns = document.querySelectorAll(".tag");

  btns.forEach((btn, index) => {
    btn.innerHTML = data[index].title;
  });
}

// displays the current question
function renderQuestion() {
  const questionTitle = document.querySelector("h2.title");
  const questionDescription = document.querySelector("#description");

  questionTitle.innerHTML = data[current].title;
  questionDescription.innerHTML = data[current].description;

  const courseLink = document.querySelector("#course");
  courseLink.href = data[current].link;

  // display test samples
  const testContainer = document.querySelector("ul");

  const testSamples = data[current].test
    .map((item) => {
      return `<li>
                ${item}
              </li>`;
    })
    .join("");

  testContainer.innerHTML = testSamples;

  // tell user what to input
  const message = document.querySelector("#message");
  message.innerHTML = data[current].input;

  const placeholder = document.querySelector("input");
  placeholder.placeholder = data[current].placeholder;
}

// displays output
function renderOutput() {
  const input = document.querySelector("input");
  const btn = document.querySelector("button");
  const output = document.querySelector("#output");

  // allows users to hit enter to submit
  input.onkeydown = (e) => {
    if (e.keyCode === 13 || e.keyCode === "Enter") {
      btn.click();
    }
  };

  btn.onclick = () => {
    const inputValue = input.value;
    // no input value
    if (inputValue.length === 0) {
      return (output.innerHTML = "No input value");
    }
    const result = data[current].method(inputValue);
    output.innerHTML = `Output: ${result}`;

    // clear input
    input.value = "";
  };
}

export { renderQuestion, renderOutput, renderBtns };
