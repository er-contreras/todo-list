import './style.css';
import checkBoxes from './updates.js';
import dragAndDrop from './drag.js';
import createObj from './render.js';
import addTask from './add.js';
import { clickDots, removeAll, removeCompleteTask, updateListenerIcons } from './remove.js';
import editDescription from './edit.js';

const enter = document.getElementById('returnBtn');
const clearAll = document.querySelector('.clear-all');
const userInput = document.querySelector('#add-to-list');
const removeAllIcon = document.getElementById('remove-all');

document.addEventListener('DOMContentLoaded', () => {
  createObj();

  dragAndDrop();

  checkBoxes();

  updateListenerIcons();

  editDescription();

  clickDots();
  
});

enter.addEventListener('click', () => {
  addTask();
});

clearAll.addEventListener('click', () => {
  removeCompleteTask();
});

userInput.addEventListener('keyup', (e) => {
  e.keyCode === 13 ? addTask() : false;
});

removeAllIcon.addEventListener('click', () => {
  removeAll();
});
