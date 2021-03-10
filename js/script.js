'use strict';

// Variables
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsShowModal = document.querySelectorAll(".show-modal");

// Adding "click" events
for (let i = 0; i < btnsShowModal.length; i++)
btnsShowModal[i].addEventListener("click", showModal);

// Closing the Modal by clicking the X button
btnCloseModal.addEventListener("click", closeModal);

// Closing the Modal by clicking on the overlay
overlay.addEventListener("click", closeModal);
