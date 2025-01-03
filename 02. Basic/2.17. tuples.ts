const userData = {
  isBirthdayData: true,
  ageData: 40,
  userNameData: 'John',
  someKey: 'someValue',
  messages: { error: 'Error' },
};

const userDataTuple: [boolean, number, ...string[]] = [
  true,
  40,
  'John',
  'Alex',
  'Ann',
];

userDataTuple.map(t => `${t} -data`);
const [isBirthday, age, userName] = userDataTuple;

const createError = (msg: string) => {
  throw new Error(msg);
};

function logBrtMsg({
  isBirthdayData,
  userNameData,
  ageData,
  messages: { error },
}: {
  isBirthdayData: boolean;
  userNameData: string;
  ageData: number;
  messages: { error: string };
}): string {
  if (isBirthdayData) {
    return `Congrats ${userNameData.toUpperCase()}, age: ${ageData + 1}`;
  } else {
    return createError(error);
  }
}

console.log(logBrtMsg(userData));
export {};
