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
  try {
    // await - palaukti kol grys atsakymas ir tik tada vykdyti kita eilute
    const resp = await fetch(url);
    const userArr = await resp.json();
    const respPost = await fetch('https://jsonplaceholder.typicode.com/posts');
    const postsArr = await respPost.json();
    console.log('userArr ===', userArr, 'posts', postsArr);
  } catch (error) {
    console.warn('FETCH await ivyko klaida:', error);
  }
}
fetchUsersA();

// su async await parasyt funkcija kuri grazina postus
// https://jsonplaceholder.typicode.com/posts
async function getPosts() {
  try {
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
    const dataInJs = await resp.json();
    console.log('dataInJs ===', dataInJs.slice(0, 15));
  } catch (error) {
    console.warn('FETCH await ivyko klaida:', error);
  }
}
getPosts();
