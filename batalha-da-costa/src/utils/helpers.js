import { Timestamp } from 'firebase/firestore';

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

export const formatDateToDDMMYYYY = (timestamp) => {
  if (!(timestamp instanceof Timestamp)) {
    console.error("Input is not a Firestore Timestamp.");
    return null;
  }

  const date = timestamp.toDate();
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}