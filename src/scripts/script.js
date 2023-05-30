function handleModal() {
    const button = document.querySelector(".openModal");
    const modalContainer = document.querySelector("#modalContainer");
  
    button.addEventListener("click", () => {
      modalContainer.showModal();
  
      closeModal();
    });
  }
  
  function closeModal() {
    const button = document.querySelector(".closeModal", "x");
    const modalContainer = document.querySelector("#modalContainer");
  
    button.addEventListener("click", () => {
      modalContainer.close();
    });
}
  
  
  handleModal();
