"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");
console.log(btnOpenModal);
for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener("click", function () {
    console.log("Button clicked");
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    //to close the button by using the class
  });

  const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  };

  btnCloseModal.addEventListener(
    "click",
    closeModal
    /*these two lines are to close the model window after it is clicked using model add this violates the DRY RULES 
        modal.classList.add("hidden");
    overlay.classList.add("hidden"); */
  );

  /*this is used to click anywhere near overlay (or outside the overlay) to close the model window*/
  overlay.addEventListener(
    "click",
    closeModal

    /*  modal.classList.add("hidden");
    overlay.classList.add("hidden");*/
  );
}
