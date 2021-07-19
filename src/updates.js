// ------------ CheckBoxes ------------------>
export default function checkBoxes() {
  const checkboxes = document.querySelectorAll('input[type=checkbox]');

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
      if (this.checked) {
        // console.log('Checkbox is checked..', i);
      } else {
        // console.log('Checkbox is not checked..');
      }
    });
  });
}