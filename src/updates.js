// ------------ CheckBoxes ------------------>
export function checkBoxes() {
  const checkboxes = document.querySelectorAll("input[type=checkbox]");

  checkboxes.forEach(function (checkbox, i) {
    checkbox.addEventListener('change', function () {
      if (this.checked) {
        console.log("Checkbox is checked..", i);

      } else {
        console.log("Checkbox is not checked..");
      }
    })
  });
}