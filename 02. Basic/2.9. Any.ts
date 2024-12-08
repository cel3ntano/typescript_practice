const userData = '{"isBirthday": true, "age": 40, "userName": "John"}';
const userObj: { isBirthday: boolean; age: number; userName: string } =
  JSON.parse(userData); // avoid "Any" here

function logBirthdayMessage(
  isBirthday: boolean,
  age: number,
  userName: string
): string {
  if (isBirthday) {
    return `Congrats ${userName.toUpperCase()}, age: ${age + 1}`;
  } else {
    return 'Error';
  }
}

logBirthdayMessage(userObj.isBirthday, userObj.age, userObj.userName);

export {};
