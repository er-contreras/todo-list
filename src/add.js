import dragAndDrop from './drag.js';
import editDescription from './edit.js';
import { updateListenerIcons } from './remove.js';
import createObj from './render.js';
import { retrieveLocal, savingOnLocal } from './store.js';
import Task from './task.js';
import checkBoxes from './updates.js';

export default function addTask() {
  const userInput = document.getElementById('add-to-list');
  const local = retrieveLocal();
  const userObj = new Task(userInput.value, false, local.length);

  local.push(userObj);

  userInput.value = '';

  savingOnLocal(local);

  createObj();

  dragAndDrop();

  checkBoxes();

  updateListenerIcons();

  editDescription();

  location.reload()
}