const exitsPeople: number[] = [20, 4, 2];
const availableSeats: number[] = [2, 5, 7];

const isNegativeOrDecimalValue = (arr: number[]) => {
  return arr.some((el) => el < 0 || !Number.isInteger(el));
};

export const calculateNeededCars = (
  existPeopleParam: number[],
  availableSeatsParam: number[],
): number | null => {
  const isExistPeopleParamIsInvalid =
    isNegativeOrDecimalValue(existPeopleParam);
  const isavailableSeatsParamInvalid =
    isNegativeOrDecimalValue(availableSeatsParam);

  if (isExistPeopleParamIsInvalid && isavailableSeatsParamInvalid) {
    console.error('Some array has negative value');
    return null;
  }

  if (existPeopleParam.length !== availableSeatsParam.length) {
    console.error('Length of arrays is different');
    return 0;
  }

  const totalPeople = existPeopleParam.reduce((acc, el) => acc + el, 0);

  if (totalPeople === 0) return 0;

  let totalSeats = 0;
  let carsNeeded = 0;

  for (const seats of [...availableSeatsParam].sort((a, b) => b - a)) {
    if (totalSeats >= totalPeople) break;
    totalSeats += seats;
    carsNeeded += 1;
  }

  if (totalSeats < totalPeople) {
    return totalSeats - totalPeople;
  }

  return carsNeeded;
};

const neededCars = calculateNeededCars(exitsPeople, availableSeats);

if (neededCars && neededCars < 0) {
  console.log(`Need more cars with seats: ${neededCars}`);
} else {
  console.log('Needed cars:', neededCars);
}
