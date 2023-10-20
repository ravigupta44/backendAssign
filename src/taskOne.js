

const sum_of_evens = (numbers) => {
    return numbers.reduce((acc, number) => {
      return number % 2 === 0 ? acc + number : acc;
    }, 0);
  };
  

  
  module.exports = sum_of_evens;
  