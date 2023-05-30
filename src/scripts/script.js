function handleModal() {
    const button = document.querySelector(".openModal");
    const modalContainer = document.querySelector("#modalContainer");
  
    button.addEventListener("click", () => {
      modalContainer.showModal();
  
      closeModal();
    });
  }
  
  function closeModal() {
    const button = document.querySelector("#closeModal");
    const modalContainer = document.querySelector("#modalContainer");
  
    button.addEventListener("click", () => {
      modalContainer.close();
    });
  }
  
  function closeModalByX() {
    const buttonX = document.querySelector("#xa");
    const modalContainer = document.querySelector("#modalContainer");
  
    buttonX.addEventListener("click", () => {
      modalContainer.close();
    });
  }
  
  handleModal();
