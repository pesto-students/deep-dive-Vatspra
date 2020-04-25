const isNumber = (num) => typeof num === 'number' && !Number.isNaN(num);

function minima(numerOfElements, array) {
  const isValidNumber = isNumber(numberOfElementsToReturn);

  if (!isValidNumber) {
    throw new TypeError(`expected number , got ${typeof numberOfElementsToReturn}`);
  }

  if (numberOfElementsToReturn < 0) {
    throw new Error('length must be greater or equal to zero.');
  }

  if (!Array.isArray(array)) {
    throw new TypeError(`expected array , got ${typeof array}`);
  }

  const inputArray = array.filter(isNumber);
  inputArray.sort((num1, num2) => num1 - num2);

  const lengthOfInputArray = inputArray.length;
  if (lengthOfInputArray <= numberOfElementsToReturn) {
    return inputArray;
  }
  return inputArray.slice(0, numberOfElementsToReturn);
}

export { minima };
