let accordionBlock = document.querySelector('.questions__items');

let toggleOpenCloseAccordion = function (event) {
  let target = event.target;

  if (target.className == 'questions__item-title') {
    target.parentElement.classList.toggle('questions__item--active');
  }
}

accordionBlock.addEventListener('click', toggleOpenCloseAccordion);