const departments: string[] = ['dev', 'design', 'marketing'];
const department = departments[0];
// departments.push(5); // error

const report = departments
  .filter((dept: string) => dept !== 'dev')
  .map((dept: string) => `${dept} - done`);

const nums: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

const [first] = report;
console.log('first: ', first);
export {};
