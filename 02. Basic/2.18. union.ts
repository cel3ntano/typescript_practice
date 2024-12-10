const message: string | number = 5;
const messages: string[] | number[] = ['a', 'b'];

function printMessage(message: string | number): void {
  console.log(message);
}

printMessage(4);
printMessage('Hello');

export {};
