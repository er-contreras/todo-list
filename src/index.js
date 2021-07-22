import './style.css';
import checkBoxes from './updates.js';
import { dragAndDrop } from './drag.js';

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

function listElements() {
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
}

export class Task {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

export function createObj() {
  let arrayt = [];

  arrOfObjs.forEach((obj) => {
    let elem = new Task(obj.description, obj.completed, obj.index);

    arrayt.push(elem)
    savingOnLocal(arrayt)
  });
}

export function savingOnLocal(arr) {
  localStorage.setItem('tasks', JSON.stringify(arr));
}

export const retrieveLocal = () => {
  return JSON.parse(localStorage.getItem('tasks'));
}

document.addEventListener('DOMContentLoaded', (e) => {

  listElements();
  dragAndDrop();
  checkBoxes();
  createObj()

});
