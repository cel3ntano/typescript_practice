const isBirthday: boolean = true;
let age: number = 40;
const userName: string = 'John';

// function logBirthdayMessage(
//   isBirthday: boolean,
//   age: number,
//   userName: string
// ): string {
//   if (isBirthday) {
//     return `Congrats ${userName.toUpperCase()}, age: ${age + 1}`;
//   } else {
//     return 'Error';
//   }
// }
const logBirthdayMessage = (
  isBirthday: boolean,
  age: number,
  userName: string
): string => {
  if (isBirthday) {
    return `Congrats ${userName.toUpperCase()}, age: ${age + 1}`;
  } else {
    return 'Error';
  }
};

logBirthdayMessage(isBirthday, age, userName);

export {};
