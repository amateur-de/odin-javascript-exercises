const add = function(...nums) {
  
  return nums.reduce((sum , num) => sum + num , 0)
	
};

const subtract = function(...nums) {
  return nums.reduce((sum , num) => sum - num)
	
};

const sum = function(nums) {
  return Number(nums.reduce((sum , num) => sum + num , 0))
	
};

const multiply = function(nums) {
  return nums.reduce((product , num) => product * num , 1)

};

const power = function(num , power) {
  let result = 1
  for( let i = 0 ; i < power ; i++)
  {
      result *= num
  }
  return result
	
};

const factorial = function(number) {
  if( number === 0 || number === 1)
  {
    return 1
  }
  let result = 1
  for( let i = number; i > 1 ; i--)
  {
    result *= i
  }
  return result

	
};


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
