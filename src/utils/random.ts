export const createRandomNumber = (min: number, max: number) => {
  // Ensure min and max are numbers and min is less than or equal to max
  if (typeof min !== "number" || typeof max !== "number" || min > max) {
    throw new Error(
      "Invalid input: min should be less than or equal to max and both should be numbers."
    );
  }

  // Generate two random numbers between min and max (inclusive)
  const randomNumber1 = Math.floor(Math.random() * (max - min + 1)) + min;
  const randomNumber2 = Math.floor(Math.random() * (max - min + 1)) + min;

  return [randomNumber1, randomNumber2];
};
