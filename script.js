const liFAQElements = document.querySelectorAll(".card-content ul li");
const buttonFAQElement = document.querySelectorAll(".card-content ul li button");

buttonFAQElement.forEach( (button, index) => {
  button.addEventListener("click", () => (liFAQElements[index].classList.toggle("open")))
});