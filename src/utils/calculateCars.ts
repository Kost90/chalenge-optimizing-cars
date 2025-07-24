const exitsPeople: number[] = [20, 4, 1];
const availableSeats: number[] = [2, 5, 7, 2];

type IAccumulator = {
  totalSeats: number;
  carsNeeded: number;
};

export const calculateNeededCars = (
  existPeopleParam: number[],
  availableSeatsParam: number[],
): number => {
  const totalPeople = existPeopleParam.reduce((acc, el) => acc + el, 0);

  if (totalPeople === 0) return 0;

  const { carsNeeded, totalSeats } = [...availableSeatsParam]
    .sort((a, b) => b - a)
    .reduce<IAccumulator>(
      (acc, carSeats) => {
        if (acc.totalSeats >= totalPeople) {
          return acc;
        }

        return {
          totalSeats: acc.totalSeats + carSeats,
          carsNeeded: acc.carsNeeded + 1,
        };
      },
      { totalSeats: 0, carsNeeded: 0 },
    );

  if (totalPeople > totalSeats) {
    const unavailableSeats = totalPeople - totalSeats;

    return -unavailableSeats;
  }

  return carsNeeded;
};

const neededCars = calculateNeededCars(exitsPeople, availableSeats);

if (neededCars < 0) {
  console.log(`Need more cars with seats: ${neededCars}`);
} else {
  console.log('Needed cars:', neededCars);
}
