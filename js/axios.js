'use strict';
console.log('axios.js file was loaded');

// parsiusti ir iskonsolinti visus userius is
// https://jsonplaceholder.typicode.com/users
const url = 'https://jsonplaceholder.typicode.com/users';

fetch(url)
  .then((resp) => resp.json())
  .then((atsInJs) => {
    console.log('atsInJs ===', atsInJs);
  })
  .catch((error) => {
    console.warn('ivyko klaida:', error);
  });
