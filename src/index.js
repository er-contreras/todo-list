import './style.css';
import { dragAndDrop } from './drag.js';
import { checkBoxes } from './updates.js';

const placeholder = document.querySelector('#placeholder');
const listcontainer = document.createElement('div');
const clearAll = document.createElement('button');

listcontainer.id = 'listContainer';

export let arr = [
  {
    description: 'Wash the dishes',
    completed: true,
    index: 0,
  },

  {
    description: 'Complete To Do list project',
    completed: false,
    index: 1,
  },

  {
    description: 'Understand data structure',
    completed: false,
    index: 2,
  },
];

// const createList = () => {
  for (let i = 0; i < arr.length; i += 1) {
    const dropZone = document.createElement('div');
    const inputlabel = document.createElement('label');
    const inputCheck = document.createElement('input');
    const inputsLabelsContainer = document.createElement('div');

    dropZone.className = 'dropZone';
    clearAll.className = 'clearAll';
    inputsLabelsContainer.className = 'inputsLabelsContainer';

    dropZone.id = `draggable-${i}`;
    inputCheck.id = `inputCheck-${i}`;

    dropZone.setAttribute('draggable', 'true');
    inputlabel.setAttribute('for', `inputCheck-${i}`);
    inputCheck.setAttribute('type', 'checkbox');

    dropZone.innerHTML = '<span class="material-icons dots">more_vert</span>';

    inputlabel.textContent = `${arr[i].description}`;
    clearAll.textContent = 'Clear all completed';

    inputsLabelsContainer.appendChild(inputCheck);
    inputsLabelsContainer.appendChild(inputlabel);
    dropZone.appendChild(inputsLabelsContainer);
    listcontainer.appendChild(dropZone);
  }

  placeholder.appendChild(listcontainer);
  placeholder.appendChild(clearAll);
// }


// Store arr in localstorage
localStorage.setItem('arr', JSON.stringify(arr));
// arr = JSON.parse(localStorage.getItem('arr'));

// console.log(arr)

// let allCheckBox = document.querySelectorAll('#inputCheck-${i}')

// function checking() {
arr.forEach((item, i) => {
  let inputsCheckbox = document.getElementById(`inputCheck-${i}`);

  if (item.completed === true) {
    inputsCheckbox.checked = true;
  }

});
// }




// document.addEventListener('DOMContentLoaded', () => {
  // createList()
  dragAndDrop();
  
  checkBoxes();
// })