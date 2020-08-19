const input = document.getElementById("input");
const submit = document.getElementById("submit");

const viewOnSubmit = () => {
  const displayInputText = document.querySelector("p");
  displayInputText.textContent = input.value;
  input.value = "";
};

submit.addEventListener("click", viewOnSubmit);
