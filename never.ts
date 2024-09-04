// never

const isBirthdayData: boolean = true;
const ageData: number = 40;
const userNameData: string = "John";

const createError = (msg: string) => {
  throw new Error(msg);

  //   while (true) {
  // unreachable code
  //   }
};

function logBrtMsg(isBirthday: boolean, userName: string, age: number): string {
  if (isBirthday === true) {
    return `Congrats ${userName.toUpperCase()}, age: ${age + 1}`;
  } else if (isBirthday === false) {
    return "Oops";
  }
  return createError("Error");
}

logBrtMsg(isBirthdayData, userNameData, 40);

// const something: never = null;
