const body = document.querySelector("body");
const p = document.querySelector("p");

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function main() {
  const red = randomNumber(0, 255);
  const green = randomNumber(0, 255);
  const blue = randomNumber(0, 255);

  const color = `rgb(${red}, ${green}, ${blue})`;

  p.textContent = color;
  body.style.backgroundColor = color;
}

main();
