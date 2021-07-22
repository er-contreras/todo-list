import { savingOnLocal, Task } from "./index.js";
import checkBoxes from "./updates.js";


let dragSrcEl;

const htmlLocalData = () => {
  let arr = [];

  let listContainer = [...document.querySelector('#list-container').children];

  listContainer.forEach((items, i) => {
    let inputsContainer = items.querySelector('.inputs-labels-container');
    let checkbox = inputsContainer.querySelector('.checkbox');
    let newTask = new Task(inputsContainer.textContent, checkbox.checked, i);
    arr.push(newTask);
  });

  savingOnLocal(arr);
}

const handleDragStart = (e) => {
  e.currentTarget.style.opacity = '0.4';
  dragSrcEl = e.currentTarget;

  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', e.currentTarget.innerHTML);
}

const handleDragOver = (e) => {
  if (e.preventDefault) {
    e.preventDefault();
  }
}

const handleDrop = (e) => {
  e.stopPropagation();
  dragSrcEl.style.opacity = '1';

  if (dragSrcEl !== e.currentTarget) {
    dragSrcEl.innerHTML = e.currentTarget.innerHTML;
    e.currentTarget.innerHTML = e.dataTransfer.getData('text/html');
  }

  htmlLocalData();
  checkBoxes();
}

export const dragAndDrop = () => {
  const items = document.querySelectorAll('.drop-zone');

  items.forEach((item) => {
    item.addEventListener('dragstart', handleDragStart, false);
    item.addEventListener('dragover', handleDragOver, false);
    item.addEventListener('drop', handleDrop, false);
  });

}