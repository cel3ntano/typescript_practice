const message: string | number = 5;
const messages: string[] | number[] = ['a', 'b'];

// function printMessage(message: string[] | number | boolean): void {
//   if (typeof message === 'string' || typeof message === 'number') {
//     console.log(message.toString());
//   } else {
//     console.log(message);
//   }
//   console.log(message);
// }

function printMessage(message: string[] | number | boolean): void {
  if (Array.isArray(message)) {
    message.forEach(msg => console.log(msg));
  } else if (typeof message === 'number') {
    console.log(message.toFixed());
  } else {
    console.log(message);
  }
}

printMessage(4);

const printReadings = (a: number | string, b: number | boolean) => {
  if (a === b) {
    console.log(a, b);
  }
};

const printReadings2 = (a: number[] | string) => {
  console.log(a.slice(0, 3));
};

function checkReadings(readings: { system: number } | { user: number }): void {
  if ('system' in readings) {
    console.log(readings.system);
  } else {
    console.log(readings.user);
  }
}

function logValue(x: string | Date) {
  if (x instanceof Date) {
    console.log(x.getDate());
  } else {
    console.log(x.trim());
  }
}

export {};
