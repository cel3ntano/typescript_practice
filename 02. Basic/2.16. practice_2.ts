interface ElectricityData {
  readings: number;
  units: string;
  mode: 'double' | 'single';
}

interface WaterData {
  readings: number;
  units: 'm3';
}

const electricityUserData: ElectricityData = {
  readings: 95,
  units: 'kWt',
  mode: 'double',
};

const waterUserData: WaterData = {
  readings: 3,
  units: 'm3',
};

const elRate: number = 0.45;
const wRate: number = 2;

const monthPayments: [number, number] = [0, 0]; // [electricity, water]

const calculatePayments = (
  { readings, mode }: ElectricityData,
  { readings: waterReadings }: WaterData,
  elRate: number,
  wRate: number
): void => {
  if (mode === 'double' && readings < 50) {
    monthPayments[0] = readings * elRate * 0.7;
  } else {
    monthPayments[0] = readings * elRate;
  }
  monthPayments[1] = waterReadings * wRate;
};

calculatePayments(electricityUserData, waterUserData, elRate, wRate);

const sendInvoice = (
  [electricityCost, waterCost]: [number, number],
  { readings: electricityReadings, units: electricityUnits }: ElectricityData,
  { readings: waterReadings, units: waterUnits }: WaterData
): string => {
  const text = `Hello!
    This month you used ${electricityReadings} ${electricityUnits} of electricity
    It will cost: ${electricityCost}€
    
    This month you used ${waterReadings} ${waterUnits} of water
    It will cost: ${waterCost}€`;

  return text;
};

const invoice = sendInvoice(monthPayments, electricityUserData, waterUserData);
console.log(invoice);

export {};
