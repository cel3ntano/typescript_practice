type ValidAmount = 'empty' | number;

interface ClothesWarehouse {
  jackets: ValidAmount;
  hats: ValidAmount;
  socks: ValidAmount;
  pants: ValidAmount;
}

interface StationeryWarehouse {
  scissors: ValidAmount;
  paper: 'empty' | boolean;
}

interface AppliancesWarehouse {
  dishwashers: ValidAmount;
  cookers: ValidAmount;
  mixers: ValidAmount;
}

interface TotalWarehouse
  extends ClothesWarehouse,
    StationeryWarehouse,
    AppliancesWarehouse {
  deficit: boolean;
  date: Date;
}

const totalData: TotalWarehouse = {
  jackets: 5,
  hats: 'empty',
  socks: 'empty',
  pants: 15,
  scissors: 15,
  paper: true,
  dishwashers: 3,
  cookers: 'empty',
  mixers: 14,
  deficit: true,
  date: new Date(),
};

function printReport(data: TotalWarehouse): string {
  const result: string = Object.entries(data)
    .filter(item => item[1] === 'empty')
    .reduce((res, item) => `${res} ${item[0]},`, '');

  if (result.trim().length) {
    return `We need this items:${result.slice(0, -1)}`;
  } else {
    return 'Everything fine';
  }
}

// function printReport(totalData: TotalWarehouse): string {
//   const emptyItems: string[] = [];
//   for (const key in totalData) {
//     if (Object.prototype.hasOwnProperty.call(totalData, key)) {
//       const typedKey = key as keyof TotalWarehouse;
//       if (typedKey === 'deficit' || typedKey === 'date') continue;
//       if (totalData[typedKey] === 'empty') {
//         emptyItems.push(typedKey);
//       }
//     }
//   }
//   return emptyItems.length
//     ? `We need following items: ${emptyItems.join(', ')}`
//     : 'Everything is fine';
// }

console.log(printReport(totalData));
export {};
