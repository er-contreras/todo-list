export default function dragAndDrop() {
  const items = document.querySelectorAll('.dropZone');

  document.addEventListener('DOMContentLoaded', () => {
    let dragSrcEl;

    function handleDragStart(e) {
      this.style.opacity = '0.4';
      dragSrcEl = this;

      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/html', this.innerHTML);
    }

    function handleDragEnd() {
      this.style.opacity = '1';

      items.forEach((item) => {
        item.classList.remove('over');
      });
    }

    function handleDragOver(e) {
      if (e.preventDefault) {
        e.preventDefault();
      }

      return false;
    }

    function handleDragEnter() {
      this.classList.add('over');
    }

    function handleDragLeave() {
      this.classList.remove('over');
    }

    function handleDrop(e) {
      e.stopPropagation();

      if (dragSrcEl !== this) {
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
      }

      return false;
    }

    items.forEach((item) => {
      item.addEventListener('dragstart', handleDragStart, false);
      item.addEventListener('dragover', handleDragOver, false);
      item.addEventListener('dragenter', handleDragEnter, false);
      item.addEventListener('dragleave', handleDragLeave, false);
      item.addEventListener('dragend', handleDragEnd, false);
      item.addEventListener('drop', handleDrop, false);
    });
  });
}