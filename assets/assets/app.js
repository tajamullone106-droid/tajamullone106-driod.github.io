const modal = document.getElementById("modal");

const status = document.getElementById("status");

const openModal = () => {
  modal.classList.remove("hidden");
};

const closeModal = () => {
  modal.classList.add("hidden");
};


document
  .getElementById("connectTop")
  .addEventListener("click", openModal);


document
  .getElementById("connectMain")
  .addEventListener("click", openModal);


document
  .getElementById("close")
  .addEventListener("click", closeModal);


document
  .getElementById("learn")
  .addEventListener("click", () => {
    document
      .getElementById("how")
      .scrollIntoView({
        behavior: "smooth"
      });
  });


document
  .getElementById("demoConnect")
  .addEventListener("click", () => {

    status.style.display = "block";

    status.textContent =
      "Demo wallet connection successful. No recovery phrase was requested or transmitted.";

  });
