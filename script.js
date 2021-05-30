'use strict';
//Workflow functions
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

//opening modals, stored class modifier actions inside a function to be called upon an event listener
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
//closing modals, stored class modifier actions inside a function to be called upon an event listener
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//Class modifiers
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//this acts on the whole DOM, reacting when the Esc key is pressed down.
//the function is executed when the Event itself triggers it
//this created an object event which gives us the entire information of any key pressed
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
// this if statement says that if the input parameter (which is the key pressed down) is the 'Escape' key AND if the modal does NOT contain the class hidden(which would make it visible) the Escape key will actually execute the closeModal function.
