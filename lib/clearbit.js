// in the entry file
// imports
import { callClearbitAPI, fetchApi } from './call_clearbit_api'
// 1. import the function
import { initSortablejs } from './plugins/init_sortablejs'

// eventListeners
const form = document.getElementById('clearbitForm');
form.addEventListener('submit', callClearbitAPI);

// function calls (if we have any)
fetchApi('boris@lewagon.org');

// 2. call the function
initSortablejs();
