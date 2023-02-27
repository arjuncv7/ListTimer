function listCreation() {
  const input = parseInt(prompt("Enter the no of inputs"));
  let list = [];
  for (let i = 0; i < input; i++) {
    list[i] = prompt(`enter the ${i + 1} input`);
  }
  let timeHolder = document.querySelector(".timer-holder");
  let timer = document.querySelector(".timer");
  timeHolder.style.display = "block";
  let ul = document.createElement("ul");
  ul.innerHTML = list.map((item) => `<li>${item}</li>`).join("");
  let body = document.getElementsByTagName("body")[0];
  body.appendChild(ul);
  let countDown = 10;
  let timerId = setInterval(() => {
    timer.innerText = countDown;
    countDown--;
    if (countDown < 0) {
      clearInterval(timerId);
      document.body.removeChild(ul);
      timeHolder.style.display = "none";
    }
  }, 1000);
}
