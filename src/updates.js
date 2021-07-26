// ------------ CheckBoxes ------------------>
import { retrieveLocal, savingOnLocal } from './store.js';

export default function checkBoxes() {
  const checkboxes = document.querySelectorAll('input[type=checkbox]');

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', (e) => {
      const index = parseInt(e.target.parentElement.parentElement.id, 10);
      const local = retrieveLocal();

      if (e.target.checked) {
        e.target.setAttribute('checked', true);
        local[index].completed = true;
        e.target.nextElementSibling.classList.add('complete');
      } else {
        e.target.removeAttribute('checked');
        local[index].completed = false;
        e.target.nextElementSibling.classList.remove('complete');
      }

      savingOnLocal(local);
    });
  });
}