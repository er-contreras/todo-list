export function savingOnLocal(arr) {
  localStorage.setItem('tasks', JSON.stringify(arr));
}

export const retrieveLocal = () => JSON.parse(localStorage.getItem('tasks'));