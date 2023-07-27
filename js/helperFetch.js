import { getData, getDataAsync } from './modules/getData.js';
console.log('helperFetch.js file was loaded');
const url = 'https://jsonplaceholder.typicode.com/posts';
// const posts = fetchGet('https://jsonplaceholder.typicode.com/posts'); // nono

getData(url).then((posts) => {
  // console.log('posts ===', posts);
  // render(posts);
});

async function init() {
  const posts = await getData(url);
  console.log('posts init ===', posts);
  const users = await getDataAsync(
    'https://jsonplaceholder.typicode.com/users'
  );
  console.log('users ===', users);
  render(posts);
}
init();

const users = getDataAsync('https://jsonplaceholder.typicode.com/users');
// gausim promise
console.log('users ===', users);

function render(arr) {
  console.log('nupiesiau posts');
}
