// https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html#readonly-and-const

interface User {
  readonly login: string;
  password: string;
  age: number;
  readonly addr: string | undefined;
  parents?: {
    mother?: string;
    father?: string;
  };
}

const user: User = {
  login: 'first',
  password: 'qwerty',
  age: 50,
  addr: 'something',
};

const userFreeze: Readonly<User> = {
  login: 'first',
  password: 'qwerty',
  age: 50,
  addr: 'something',
};

userFreeze.age = 51;
userFreeze.password = 'qwerty';

let dbName: string;
sendUserData(user, 'lalala');

console.log(dbName!);

function sendUserData(obj: User, db?: string): void {
  dbName = '12345';
  console.log(obj.parents!.mother?.toLowerCase(), db!.toLowerCase);
}

const basicPorts: ReadonlyArray<number> = [3000, 3001, 5555];
basicPorts[0] = 5;
basicPorts.push(555);

// const basicPorts: readonly [number, ...string[]] = [3000, '3001', 5555];
// basicPorts[0] = 5;
// basicPorts.push(555);

export {};
