const $ = (selector) => document.querySelector(selector);

const gridContainer = $('#grid-container');

const gridGenerator = () => {
  for (let i = 0; i < 1024; i++) {
    const gridElement = document.createElement('div');
    gridElement.classList.add('etch-a-sketch-grid');
    gridContainer.appendChild(gridElement);
  }
};

const fillInElement = (element) => {
  element.style.backgroundColor = 'black';
};

const resetEvent = (gridElements) => {
  gridElements.forEach((element) => {
    element.style.backgroundColor = 'grey';
  });
};

document.addEventListener('DOMContentLoaded', () => {
  gridGenerator();
  const gridElements = document.querySelectorAll('.etch-a-sketch-grid');

  gridElements.forEach((element) => {
    element.addEventListener('mouseover', () => {
      fillInElement(element);
    });
  });

  $('#reset').addEventListener('click', () => {
    resetEvent(gridElements);
  });
});
