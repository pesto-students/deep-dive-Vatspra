function deepEqual(firstObj, secondObj, compareDescriptor) {
  if (!isObject(firstObj)) {
    throw new TypeError(`expected object, got ${typeof firstObj}`);
  }

  if (!isObject(secondObj)) {
    throw new TypeError(`expected object, got ${typeof secondObj}`);
  }

  if (!isObject(compareDescriptor)) {
    throw new TypeError(`expected object, got ${typeof object3}`);
  }

  const shouldCompareDescriptor = compareDescriptor.matchDescriptors;

  return isObjectEqual(firstObj, secondObj, shouldCompareDescriptor);

}

const isObjectEqual = (firstObj, secondObj, shouldCompareDescriptor) => {

  // check if objects have identical keys
  const objectHasSameKeys = compareObjectKeys(firstObj, secondObj);
  if (!objectHasSameKeys) {
    return false;
  }
  const propertiesOfFirstObj = Object.getOwnPropertyNames(firstObj);

  for (const property of propertiesOfFirstObj) {
    // if should compareDescrptor is true, compare the descriptor
    // if objects have different descriptor return false
    if (shouldCompareDescriptor) {
      const descriptorOfFirstObj = Object.getOwnPropertyDescriptor(firstObj, property);
      const descriptorOfSecondObj = Object.getOwnPropertyDescriptor(secondObj, property);
      const hasSameDescriptor = compareDescriptor(descriptorOfFirstObj, descriptorOfSecondObj);
      if (!hasSameDescriptor) {
        return false;
      }
    }

    // compare values 
    // if value is not object then compare directly , otherwise recursively call 
    // isOjectEqual function
    const firstVal = firstObj[property];
    const secondVal = secondObj[property];
    const isValObject = isObject(firstObj);
    if (!isValObject) {
      if (firstVal !== secondVal) {
        return false;
      }
    } else {
      if (!isObjectEqual(firstVal, secondVal, shouldCompareDescriptor)) {
        return false;
      }
    }
  }

  /**
   * if objects have identical keys , values and descriptor 
   * then both the object is identical so return true
   */
  return true;
};

const compareObjectKeys = (firstObj, secondObj) => {
  const propertiesOfObj1 = Object.getOwnPropertyNames(firstObj);
  const propertiesOfObj2 = Object.getOwnPropertyNames(secondObj);
  const len1 = propertiesOfObj1.length;
  const len2 = propertiesOfObj2.length;
  if (len1 !== len2) {
    return false;
  }
  for (const property of propertiesOfObj1) {
    const hasProperty = propertiesOfObj2.includes(property);
    if (!hasProperty) {
      return false;
    }
  }
  return true;
};

const compareDescriptor = (firstDescriptor, secondDescriptor) => {
  const keys = Object.getOwnPropertyNames(firstDescriptor);
  for (const key of keys) {
    if (key !== 'value') {
      const val1 = firstDescriptor[key];
      const val2 = secondDescriptor[key];
      if (val1 !== val2) {
        return false;
      }
    }
  }
  return true;
};

const isObject = (obj) => typeof obj === 'object' && typeof obj !== null;


export {
  deepEqual,
};
