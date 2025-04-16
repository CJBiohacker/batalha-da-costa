export const extractEditionNumber = (inputString) => {
  const parts = inputString.split(" - ");
  if (parts.length >= 1) {
    const editionPart = parts[0];
    const numberMatch = editionPart.match(/\d+/);
    if (numberMatch?.[0]) {
      return parseInt(numberMatch[0], 10);
    }
  }
  return null;
};
