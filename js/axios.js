'use strict';
console.log('axios.js file was loaded');

// parsiusti ir iskonsolinti visus userius is
// https://jsonplaceholder.typicode.com/users
const url = 'https://jsonplaceholder.typicode.com/users111';

fetch(url)
  .then((resp) => {
    console.log('FETCH resp ===', resp);
    // if (!resp.ok) throw new Error('kazkas ne taip');
    return resp.json();
  })
  .then((atsInJs) => {
    console.log('FETCH atsInJs ===', atsInJs);
  })
  .catch((error) => {
    console.warn('FETCH ivyko klaida:', error);
  });

axios
  .get(url)
  .then((axiosResp) => {
    console.log('axiosResp ===', axiosResp);
    const users = axiosResp.data;
    console.log('axiosResp users ===', users);
  })
  .catch((error) => {
    console.warn('AXIOS ivyko klaida:', error);
  });
