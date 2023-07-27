'use strict';
console.log('axiosPost.js file was loaded');

const url = 'https://jsonplaceholder.typicode.com/posts';

// create new post in
const newPostObj = {
  title: 'foo',
  body: 'bar',
  userId: 1,
};
// siusti fetch posta kad sukurti nauja posta
fetch(url, {
  method: 'POST',
  headers: { 'Content-type': 'application/json' },
  body: JSON.stringify(newPostObj),
})
  .then((resp) => resp.json())
  .then((rezult) => {
    console.log('rezult ===', rezult);
  })
  .catch((error) => {
    console.warn('ivyko klaida:', error);
  });

// siusti posta kad sukurti nauja posta su axios
axios
  .post(url, newPostObj)
  .then((axiosResp) => {
    console.log('axiosResp ===', axiosResp);
    console.log('resp.data ===', axiosResp.data);
  })
  .catch((error) => {
    console.warn('ivyko klaida:', error);
  });
