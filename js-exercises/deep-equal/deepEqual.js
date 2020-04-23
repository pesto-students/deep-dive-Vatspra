function deepEqual(...args) {
  const obj1 = args[0];
  const obj2 = args[1];
  const obj3 = args[2];
  const isNotObject = typeof obj1 !== 'object' || typeof obj2 !== 'object' || typeof obj3 !== 'object';
  if (isNotObject) {
    throw new TypeError(`only objects are allowed`);
  }
  const shouldCompareDescriptor = obj3.matchDescriptors;
  return compareObject(obj1, obj2, shouldCompareDescriptor);

}

const compareObject = (obj1, obj2, shouldCompareDescriptor) => {
  for (const key in obj1) {

    // if both the object has not same property return false
    const hasProperty = obj1.hasOwnProperty(key) === obj2.hasOwnProperty(key);
    if (!hasProperty) {
      return false;
    }

    // compare the object descriptor , if its not true return false
    if (shouldCompareDescriptor) {
      const obj1Descriptor = Object.getOwnPropertyDescriptor(obj1, key);
      const obj2Descriptor = Object.getOwnPropertyDescriptor(obj2, key);
      const objectsHasSameDescripor = comareDescriptor(obj1Descriptor, obj2Descriptor)
      if (!objectsHasSameDescripor) {
        return false;
      }
    }

    // if value of object property is not an object directly compare its value
    // if value is again a object recursively call this compareObject method
    if (!isObject(obj1[key])) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    } else {
      const isValObject = isObject(obj2[key]);
      if (!isValObject || !compareObject(obj1[key], obj2[key], shouldCompareDescriptor)) {
        return false;
      }
    }
  }

  // if obj2 and 
  for (const key in obj2) {
    if (obj2.hasOwnProperty(key)) {
      if (!obj1.hasOwnProperty(key)) {
        return false;
      }
    }
  }

  return true;
}

// compare the descriptoe
const comareDescriptor = (obj1, obj2) => {
  return isObjectkeyValEqual(obj1, obj2, 'value');
}


const isObjectkeyValEqual = (obj1, obj2, EscapeVal) => {
  for (const key in obj1) {
    if (key !== EscapeVal) {
      if (obj1.hasOwnProperty(key) !== obj2.hasOwnProperty(key)) {
        return false;
      }
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  }


  for (const key in obj2) {
    if (key !== EscapeVal) {
      if (obj2.hasOwnProperty(key)) {
        if (!obj1.hasOwnProperty(key)) {
          return false;
        }
      }
    }
  }
  return true;
}

const isObject = (obj) => typeof obj === 'object';

// const obj1 = {};

// const obj2 = {};
// Object.defineProperty(obj2, "a", { value: 5 });
// Object.defineProperty(obj1, "a", { value: 4 });
// console.log(compareObject(obj2, obj1, true));

// console.log(compareObject({ a: { b: { c: { d: 4 } } }, e: 3, f: { g: {} } }, { a: { b: { c: { d: 4 } } }, e: 3, f: { g: { x: 6 } } }, true));

export {
  deepEqual,
};