//  https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-inference
var fetchData = function (url, method) {
    console.log(method);
};
var reqOptions = {
    url: 'https://someurl.com',
    method: 'GET',
};
fetchData('qqq', 'POST');
// fetchData(reqOptions.url, reqOptions.method as 'GET');
fetchData(reqOptions.url, reqOptions.method);
var box = document.querySelector('.box');
var input = document.querySelector('input');
var someNumber = +input.value;
console.log(someNumber);
var a = 'value';
// export {};
