let elementButton = document.querySelector("button#openModal");
let elementModal = document.querySelector("div.modral-wrapper");
let elementKeyPress = document.querySelector("html");

elementButton.addEventListener("click", function() {
  elementModal.classList.remove("invisible");
});

elementKeyPress.addEventListener("keydown", function(event) {
  const isEscKey = event.key === "Escape";
  const isCloseModal = elementModal.classList.contains("invisible");

  if(false === isCloseModal){
    if(true === isEscKey) {
      elementModal.classList.toggle("invisible");
    }else{
      throw new Error("A tecla pressionada não é ESC");
    }
  }
});