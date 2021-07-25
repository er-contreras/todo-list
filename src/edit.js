import { savingOnLocal, retrieveLocal } from './store.js';

export default function editDescription() {
  const labels = document.querySelectorAll('label');

  labels.forEach((label) => {
    label.addEventListener('input', (e) => {
      const index = parseInt(e.target.parentElement.parentElement.id, 10);
      const local = retrieveLocal();

      local[index].description = label.textContent;

      savingOnLocal(local);
    });
  });
}