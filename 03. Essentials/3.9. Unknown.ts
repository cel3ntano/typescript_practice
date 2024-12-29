// https://www.typescriptlang.org/docs/handbook/2/functions.html#unknown

// let something: unknown;

// something = 'str';

// let data: string[] = something;
// data.find(e => e);

// const someValue: unknown = 10;
// someValue.method();

// function fetchData(data: unknown): void {
//   if (typeof data === 'string') {
//     console.log(data.toLowerCase());
//   }
// }

const userData = '{"isBirthday": true, "age": 40, "userName": "John"}';

function safeParse(s: string): unknown {
  return JSON.parse(s);
}

const data = safeParse(userData);

function transferData(d: unknown): void {
  if (typeof d === 'string') {
    console.log(d.toLowerCase());
  } else if (typeof d === 'object' && d) {
    console.log(data);
  } else {
    console.error('Some error');
  }
}

transferData(data);

try {
  if (1) throw new Error('error');
} catch (e) {
  if (e instanceof Error) {
    console.log(e.message);
  } else if (typeof e === 'string') {
    console.log(e);
  }
}

type T0 = any | unknown; // any
type T1 = number | unknown; // unknown
type T2 = any & unknown; // any
type T3 = number & unknown; // number

export {};
