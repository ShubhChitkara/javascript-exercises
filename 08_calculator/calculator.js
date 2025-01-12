const add = function(a,b) {
  let addition=a+b;
  return addition
};

const subtract = function(c,d) {
	let diff=c-d;
  return diff
};

const sum = function(arr) {
  const productOfAllNums = arr.reduce((total, currentItem) => {
    return total + currentItem;
  }, 0);
  return productOfAllNums
};

const multiply = function(array) {
  const productOfAllNums = array.reduce((total, currentItem) => {
    return total * currentItem;
  }, 1);
  return productOfAllNums

};

const power = function(num1,num2) {
  const ans = num1**num2;
  return ans
};

const factorial = function(numbers) {
  let total=1;
  if(num=0){
    return total
  }else{
    for(let i=1;i<numbers+1;i++){
      total=total*i;
    }
    return total
  }
  
	
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
