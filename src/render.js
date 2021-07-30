import arrOfObjs from './array.js';
import Task from './task.js';
import { savingOnLocal, retrieveLocal } from './store.js';

const listContainer = document.getElementById('list-container');

function render(obj, i) {
  const dropZone = document.createElement('div');
  const inputlabel = document.createElement('label');
  const input = document.createElement('input');
  const inputsLabelsContainer = document.createElement('div');

  dropZone.className = 'drop-zone';
  inputsLabelsContainer.className = 'inputs-labels-container';

  dropZone.id = `${i}`;

  dropZone.setAttribute('draggable', 'true');
  input.setAttribute('type', 'checkbox');
  input.classList.add('checkbox');
  if (obj.completed) {
    input.setAttribute('checked', true);
  }

  dropZone.innerHTML = '<span class="material-icons remove removers"> delete_forever </span> <span class="material-icons dots"> more_vert </span>';

  inputlabel.textContent = `${obj.description}`;
  inputlabel.setAttribute('contenteditable', 'true');
  if (obj.completed) {
    inputlabel.classList.add('complete');
  }

  inputsLabelsContainer.appendChild(input);
  inputsLabelsContainer.appendChild(inputlabel);
  dropZone.appendChild(inputsLabelsContainer);
  listContainer.appendChild(dropZone);
}

export default function createObj() {
  const arrayt = [];
  let local;

  window.localStorage.length == null || window.localStorage.length === 0
    ? local = arrOfObjs 
    : local = retrieveLocal();

  listContainer.innerHTML = '';

  local.forEach((obj, i) => {
    const elem = new Task(obj.description, obj.completed, obj.index);

    arrayt.push(elem);

    render(obj, i);
  });
  savingOnLocal(arrayt);
}
