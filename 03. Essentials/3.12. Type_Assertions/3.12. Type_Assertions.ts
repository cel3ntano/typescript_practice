//  https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-inference

const fetchData = (url: string, method: 'GET' | 'POST'): void => {
  console.log(method);
};

const reqOptions = {
  url: 'https://someurl.com',
  method: 'GET',
};

fetchData('qqq', 'POST');
// fetchData(reqOptions.url, reqOptions.method as 'GET');
fetchData(reqOptions.url, <'GET'>reqOptions.method);

const box = document.querySelector('.box') as HTMLElement;
const input = <HTMLInputElement>document.querySelector('input');

const someNumber: number = +input.value;
console.log(someNumber);

let a = 'value' as const;
let b = { f: 100 } as const;
let c = [] as const;

let value = 'value';
let arr = ['sd', 'dff'];
let obj = { f: 100 };

// let T0 = value as const; // error

let T5 = (Math.round(Math.random() * 1) ? 'yes' : 'no') as const; // error

// export {};
