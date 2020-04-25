const isNumber = (num) => typeof num === 'number';

function minima(numberOfElementsToReturn, array) {
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

  const inputArray = array.filter(element => isNumber(element));
  const sortedArray = inputArray.sort((firstNum, secondNum) => firstNum - secondNum);
  const result = [];

  const lengthOfInputArray = inputArray.length;
  if (lengthOfInputArray <= numberOfElementsToReturn) {
    return sortedArray;
  }

  let index = 0;
  for (const num of inputArray) {
    if (index < numberOfElementsToReturn) {
      result.push(num);
      index += 1;
    } else {
      break;
    }
  }
  return result;
}

export { minima };
