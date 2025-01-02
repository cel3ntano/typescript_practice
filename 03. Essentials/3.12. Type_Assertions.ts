//  https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-inference

const fetchData = (url: string, method: 'GET' | 'POST'): void => {
  console.log('Fetched');
};

const reqOptions = {
  url: 'https://someurl.com',
  method: 'GET',
};

fetchData('qqq', 'POST');
fetchData(reqOptions.url, reqOptions.method as 'GET');

export {};
