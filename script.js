const input = document.querySelector("input");

const lowerCaseOutput = document.querySelector("#lowercase span");
const upperCaseOutput = document.querySelector("#uppercase span");
const camelCaseOutput = document.querySelector("#camelcase span");
const pascalCaseOutput = document.querySelector("#pascalcase span");
const snakeCaseOutput = document.querySelector("#snakecase span");
const kebabCaseOutput = document.querySelector("#kebabcase span");
const trimOutput = document.querySelector("#trim span");

const copyButtons = document.querySelectorAll(".copy-btn");

function capitalizeString(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1, str.length);
}

function camelCase(str) {
  const lowerCaseString = str.toLowerCase();
  const wordsArray = lowerCaseString.split(" ");
  const finalArray = wordsArray.map((word, i) => {
    if (i === 0) return word;
    return capitalizeString(word);
  });
  return finalArray.join("");
}

function pascalCase(str) {
  const lowerCaseString = str.toLowerCase();
  const wordsArray = lowerCaseString.split(" ");
  const finalArray = wordsArray.map((word) => {
    return capitalizeString(word);
  });
  return finalArray.join("");
}

function snakeCase(str) {
  return str.replaceAll(" ", "_");
}

function kebabCase(str) {
  return str.replaceAll(" ", "-");
}

function trim(str) {
  return str.replaceAll(" ", "");
}

function updateScreen() {
  lowerCaseOutput.innerText = input.value.trim().toLowerCase();
  upperCaseOutput.innerText = input.value.trim().toUpperCase();
  camelCaseOutput.innerText = camelCase(input.value.trim());
  pascalCaseOutput.innerText = pascalCase(input.value.trim());
  snakeCaseOutput.innerText = snakeCase(input.value.trim());
  kebabCaseOutput.innerText = kebabCase(input.value.trim());
  trimOutput.innerText = trim(input.value.trim());
}

function copyToClipboard(content, button) {
  navigator.clipboard
    .writeText(content)
    .then(() => {
      button.innerText = "✅";
      setTimeout(() => {
        button.innerText = "Copy";
      }, 5000); 
    })
    .catch((err) => {
      console.error("Failed to copy", err);
    });
}

function handleCopyButtonClick(e) {
  const caseType = e.target.getAttribute("data-case");
  const contentToCopy = document.querySelector(`#${caseType} span`).innerText;
  copyToClipboard(contentToCopy, e.target); // Pass the button element to change its text
}

updateScreen();

input.addEventListener("input", updateScreen);
copyButtons.forEach((button) => {
  button.addEventListener("click", handleCopyButtonClick);
});
