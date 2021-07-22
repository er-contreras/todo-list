import './style.css';
import checkBoxes from './updates.js';
import dragAndDrop from './drag.js';
import Task from './task.js';
import { savingOnLocal, retrieveLocal } from './store.js';

const placeholder = document.querySelector('#placeholder');
const listContainer = document.createElement('div');
const clearAll = document.createElement('button');

listContainer.id = 'list-container';

placeholder.appendChild(listContainer);
placeholder.appendChild(clearAll);

const arrOfObjs = [
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

if (window.localStorage.length == null || window.localStorage.length === 0) {
  arrOfObjs.forEach((obj, i) => {
    const dropZone = document.createElement('div');
    const inputlabel = document.createElement('label');
    const input = document.createElement('input');
    const inputsLabelsContainer = document.createElement('div');

    dropZone.className = 'drop-zone';
    clearAll.className = 'clear-all';
    inputsLabelsContainer.className = 'inputs-labels-container';

    dropZone.id = `${i}`;

    dropZone.setAttribute('draggable', 'true');
    input.setAttribute('type', 'checkbox');
    input.classList.add('checkbox');
    if (obj.completed) {
      input.setAttribute('checked', true);
    }

    dropZone.innerHTML = '<span class="material-icons dots">more_vert</span>';

    inputlabel.textContent = `${obj.description}`;
    clearAll.textContent = 'Clear all completed';

    inputsLabelsContainer.appendChild(input);
    inputsLabelsContainer.appendChild(inputlabel);
    dropZone.appendChild(inputsLabelsContainer);
    listContainer.appendChild(dropZone);
  });
} else {
  const obj = JSON.parse(localStorage.getItem('tasks'));
  obj.forEach((obj, i) => {
    const dropZone = document.createElement('div');
    const inputlabel = document.createElement('label');
    const input = document.createElement('input');
    const inputsLabelsContainer = document.createElement('div');

    dropZone.className = 'drop-zone';
    clearAll.className = 'clear-all';
    inputsLabelsContainer.className = 'inputs-labels-container';

    dropZone.id = `${i}`;

    dropZone.setAttribute('draggable', 'true');
    input.setAttribute('type', 'checkbox');
    input.classList.add('checkbox');
    if (obj.completed) {
      input.setAttribute('checked', true);
    }

    dropZone.innerHTML = '<span class="material-icons dots">more_vert</span>';

    inputlabel.textContent = `${obj.description}`;
    clearAll.textContent = 'Clear all completed';

    inputsLabelsContainer.appendChild(input);
    inputsLabelsContainer.appendChild(inputlabel);
    dropZone.appendChild(inputsLabelsContainer);
    listContainer.appendChild(dropZone);
  });
}

function createObj() {
  const arrayt = [];

  arrOfObjs.forEach((obj) => {
    const elem = new Task(obj.description, obj.completed, obj.index);

    arrayt.push(elem);
    savingOnLocal(arrayt);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  dragAndDrop();
  checkBoxes();
  if (window.localStorage.length == null) {
    createObj();
  } else {
    retrieveLocal();
  }
});
