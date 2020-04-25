
const isValidNumber = (num) => typeof num === 'number' && !Number.isNaN(num);

function accessorProperties() {
  const obj = {
    _number: '',
    get number() {
      if (this._number >= 0) {
        return this._number.toString(2);
      } else {
        return (this._number >>> 0).toString(2);
      }
    },

    set number(num) {
      if (isValidNumber(num)) {
        this._number = num;
      } else {
        throw new TypeError('Only valid numbers are allowed');
      }
    },
  };

  return obj;
}

export {
  accessorProperties,
};
