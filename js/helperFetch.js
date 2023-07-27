import { getData, getDataAsync, apiData } from './modules/getData.js';
console.log('helperFetch.js file was loaded');
const url = 'https://jsonplaceholder.typicode.com/posts/1';
// const posts = fetchGet('https://jsonplaceholder.typicode.com/posts'); // nono

getData(url).then((posts) => {
  // console.log('posts ===', posts);
  // render(posts);
});

async function init() {
  // const posts = await getData(url);
  // console.log('posts init ===', posts);
  const [data, error] = await apiData(
    'https://jsonplaceholder.typicode.com/users'
  );
  if (error) {
    console.log('galiu valdyti klaida', error);
    alert(error.message);
  }

  console.log('data ===', data);
  // render(posts);

  const arrSu2Reikmem = await apiData(url);
  console.log('arrSu2Reikmem ===', arrSu2Reikmem);
}
init();

const users = getDataAsync('https://jsonplaceholder.typicode.com/users');
// gausim promise
// console.log('users ===', users);

function render(arr) {
  console.log('nupiesiau posts');
}
