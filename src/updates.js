// ------------ CheckBoxes ------------------>
import { retrieveLocal, savingOnLocal } from "./index.js";

export default function checkBoxes() {
  const checkboxes = document.querySelectorAll('input[type=checkbox]');

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', (e) => {
      let index = parseInt(e.target.parentElement.parentElement.id, 10);
      let local = retrieveLocal();

      if (e.target.checked) {
        // console.log('Checkbox is checked..');
        e.target.setAttribute('checked', true);
        local[index].completed = true;
      } else {
        // console.log('Checkbox is not checked..');
        e.target.removeAttribute('checked');
        local[index].completed = false;
      }

      savingOnLocal(local);
    });
  });
}