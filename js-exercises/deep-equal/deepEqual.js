function deepEqual(object1, object2, compareDescriptor) {
  if (!isObject(object1)) {
    throw new TypeError(`expected object, got ${typeof object1}`);
  }

  if (!isObject(object2)) {
    throw new TypeError(`expected object, got ${typeof object2}`);
  }

  if (!isObject(compareDescriptor)) {
    throw new TypeError(`expected object, got ${typeof object3}`);
  }

  const shouldCompareDescriptor = compareDescriptor.matchDescriptors;

  return isObjectEqual(object1, object2, shouldCompareDescriptor);

}

const isObjectEqual = (obj1, obj2, shouldCompareDescriptor) => {

  // check if objects have identical keys
  const objectHasSameKeys = compareObjectKeys(obj1, obj2);
  if (!objectHasSameKeys) {
    return false;
  }
  const propertiesOfObj1 = Object.getOwnPropertyNames(obj1);

  for (const property of propertiesOfObj1) {
    // if should compareDescrptor is true, compare the descriptor
    // if objects have different descriptor return false
    if (shouldCompareDescriptor) {
      const descriptor1 = Object.getOwnPropertyDescriptor(obj1, property);
      const descriptor2 = Object.getOwnPropertyDescriptor(obj2, property);
      const hasSameDescriptor = compareDescriptor(descriptor1, descriptor2);
      if (!hasSameDescriptor) {
        return false;
      }
    }

    // compare values 
    // if value is not object then compare directly , otherwise recursively call 
    // isOjectEqual function
    const val1 = obj1[property];
    const val2 = obj2[property];
    const isValObject = isObject(val1);
    if (!isValObject) {
      if (val1 !== val2) {
        return false;
      }
    } else {
      if (!isObjectEqual(val1, val2, shouldCompareDescriptor)) {
        return false;
      }
    }
  }

  /**
   * if objects have identical keys , values and descriptor 
   * then both the object is identical so return true
   */
  return true;
}

const compareObjectKeys = (obj1, obj2) => {
  const propertiesOfObj1 = Object.getOwnPropertyNames(obj1);
  const propertiesOfObj2 = Object.getOwnPropertyNames(obj2);
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
}

const compareDescriptor = (descriptor1, descriptor2) => {
  const keys = Object.getOwnPropertyNames(descriptor1);
  for (const key of keys) {
    if (key !== 'value') {
      const val1 = descriptor1[key];
      const val2 = descriptor2[key];
      if (val1 !== val2) {
        return false;
      }
    }
  }
  return true;
}

const isObject = (obj) => typeof obj === 'object';


export {
  deepEqual,
};
