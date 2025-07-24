const exitsPeople: number[] = [20, 4, 1];
const availableSeats: number[] = [2, 5, 7, 2];

export const calculateNeededCars = (
  existPeopleParam: number[],
  availableSeatsParam: number[],
): number => {
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

if (neededCars < 0) {
  console.log(`Need more cars with seats: ${neededCars}`);
} else {
  console.log('Needed cars:', neededCars);
}
