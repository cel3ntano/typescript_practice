// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html

interface User {
  login: string;
  password: string;
  age: number;
  addr: string | undefined;
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

let dbName: string;
sendUserData(user, 'lalala');

console.log(dbName!);

function sendUserData(obj: User, db?: string): void {
  dbName = '12345';
  console.log(obj.parents!.mother?.toLowerCase(), db!.toLowerCase);
}

export {};
