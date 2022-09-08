const form = document.getElementById("form");
const formData = new FormData(form);

const output = document.getElementById("output");

for (const [key, value] of formData) {
  output.textContent += `${key}: ${value}\n`;
}
