import { calculateNeededCars } from '../calculateCars';

describe('calculateNeededCars', () => {
  it('should return 2 for the first example', () => {
    const people = [1, 4, 1];
    const seats = [1, 5, 1];
    expect(calculateNeededCars(people, seats)).toBe(2);
  });

  it('should return 3 for the second example', () => {
    const people = [4, 4, 2, 4];
    const seats = [5, 5, 2, 5];
    expect(calculateNeededCars(people, seats)).toBe(3);
  });

  it('should return 0 if there are no people', () => {
    const people = [0, 0];
    const seats = [5, 5, 5];
    expect(calculateNeededCars(people, seats)).toBe(0);
  });

  it('should return number less than 0 if there are more people than seats', () => {
    const people = [10, 10];
    const seats = [5, 5];
    expect(calculateNeededCars(people, seats)).toBe(-10);
  });
});
