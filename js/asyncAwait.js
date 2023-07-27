'use strict';
console.log('asyncAwait.js file was loaded');

const url = 'https://jsonplaceholder.typicode.com/users';

function fetchUsers() {
  fetch(url)
    .then((resp) => {
      return resp.json();
    })
    .then((atsInJs) => {
      console.log('FETCH atsInJs ===', atsInJs);
    })
    .catch((error) => {
      console.warn('FETCH ivyko klaida:', error);
    });
}
// fetchUsers();
async function fetchUsersA() {
  // await - palaukti kol grys atsakymas ir tik tada vykdyti kita eilute
  const resp = await fetch(url);
  const atsInJs = await resp.json();
  console.log('atsInJs ===', atsInJs);
}
fetchUsersA();
