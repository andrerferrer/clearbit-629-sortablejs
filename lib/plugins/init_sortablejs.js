// 1. import the plugin
import Sortable from 'sortablejs';

// 2. create a function 
const initSortablejs = () => {
  // implement the behavior
  const list = document.querySelector('#results');
  const options = {
    ghostClass: "ghost",
    animation: 150,
    onEnd: (event) => {
      alert(`${event.oldIndex} moved to ${event.newIndex}`);
    }
  };
  Sortable.create(list, options);
}

// 3. export the function
export { initSortablejs };
