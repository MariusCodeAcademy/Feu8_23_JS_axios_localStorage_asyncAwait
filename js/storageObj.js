'use strict';
console.log('storageObj.js file was loaded');

const newPostObj = {
  name: 'James',
  age: 55,
  isWorking: false,
};
console.log('newPostObj ===', newPostObj);

// localStorage value turi buti string
// localStorage.setItem('user', newPostObj);

// kad irasyti i localStorage objekta ar masyva
// turitm paversti ji stringu
const objInString = JSON.stringify(newPostObj);
console.log('objInString ===', objInString);
localStorage.setItem('user', objInString);

// is storage gryzta string
const isStorageGryzo = localStorage.getItem('user');
console.log('isStorageGryzo ===', isStorageGryzo);
// atgal i javascirp objekta
const objIsString = JSON.parse(isStorageGryzo);
console.log('objIsString ===', objIsString.age);

// localStorage.clear();
