import dragAndDrop from './drag.js';
import editDescription from './edit.js';
import createObj from './render.js';
import { retrieveLocal, savingOnLocal } from './store.js';
import checkBoxes from './updates.js';

export function removeCompleteTask() {
  const local = retrieveLocal();

  if (local !== []) {
    const newLocal = local.filter((task) => task.completed === false);

    newLocal.forEach((task, i) => {
      task.index = i;
    });

    savingOnLocal(newLocal);

    createObj();

    dragAndDrop();

    checkBoxes();

    updateListenerIcons(); /* eslint-disable-line */

    editDescription();
  }
}

const listContainer = document.getElementById('list-container');

export function removeAll() {
  listContainer.innerHTML = '';

  const arr = [];
  savingOnLocal(arr);
}

function removeItem(e) {
  const index = parseInt(e.target.parentElement.id, 10);
  const local = retrieveLocal();

  local.splice(index, 1);

  local.forEach((task, i) => {
    task.index = i;
  });

  savingOnLocal(local);

  createObj();

  dragAndDrop();

  checkBoxes();

  updateListenerIcons(); /* eslint-disable-line */

  editDescription();
}

export function updateListenerIcons() {
  const removers = document.querySelectorAll('.remove');

  removers.forEach((remover) => {
    remover.addEventListener('click', (e) => {
      removeItem(e);
      location.reload();
    })
  });
}

export function clickDots() {
  const dots = document.querySelectorAll('.dots');

  dots.forEach((dot) => {
    dot.addEventListener('click', (e) => {
        e.target.innerHTML = '';
        e.target.previousElementSibling.style.display = 'inherit';
    })
  })
}
