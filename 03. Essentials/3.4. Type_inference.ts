// let salary; // wrong because the type becomes 'any'
// salary = 500;

let devSalary: number;
devSalary = 500;

interface Userdata {
  isBirthday: boolean;
  age: number;
  userName: string;
}

const userData = '{"isBirthday": true, "age": 40, "userName": "John"}';
const userObj: Userdata = JSON.parse(userData);
console.log(userObj.something);

let isOkay = true;
let movement: boolean | string = false;

if (isOkay) {
  movement = 'moving';
}

// let salary = 500;
const salary = 500;

export {};
