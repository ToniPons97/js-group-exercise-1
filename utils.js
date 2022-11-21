/**Function to clear terminal when called. */
export const clear = () => {
  process.stdout.write("\x1Bc");
};

/**Generates a random number between min and max. */
export const getRandomNr = (min, max) => {
  return Math.random() * (max - min) + min;
};
