
const isValidDate = (milliseconds) => {
  return typeof milliseconds === 'number' && !Number.isNaN(milliseconds);
};

function timeWas(timeInMilliseconds, currentDateInMilliseconds) {
  if (!isValidDate(timeInMilliseconds)) {
    throw new Error('please enter time in milliseconds');
  }
  // if current date is given , override the default Date.now()
  if (currentDateInMilliseconds) {
    if (!isValidDate(currentDateInMilliseconds)) {
      throw new Error('please enter current date  in milliseconds');
    }
  }
  
  const currentDate = currentDateInMilliseconds ? currentDateInMilliseconds : Date.now();
  const timeInSeconds = Math.floor((currentDate - timeInMilliseconds) / 1000);

  if (timeInSeconds <= 1) {
    return 'just now';
  }

  // values in seconds
  const valuesInSeconds = {
    year: 31104000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1
  };

  for (const interval of Object.getOwnPropertyNames(valuesInSeconds)) {
    const counter = Math.floor(timeInSeconds / valuesInSeconds[interval]);
    if (counter > 0) {
      if (counter === 1) {
        return `${counter} ${interval} ago`;
      }
      return `${counter} ${interval}s ago`;
    }
  }
}

export { timeWas };
