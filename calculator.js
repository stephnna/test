class Calculator {
  constructor(){
  } 

  add(number1, number2) {
    if(typeof number1 !== "number" || typeof number2 !== "number"){
      return "You must provide two numbers";
    }
    return number1 + number2;      
  }
  
  subtract(number1, number2) {
    return number1 - number2;      
  }

  divide(number1, number2) {
    if(number1 === 0 && number2 === 0 || number2 ===0){
      return "number must be greater than zero"
    } else {
     result = number1/number2;
    }
    return result;            
  }
  multiply(number1, number2) {
    return number1 * number2;      
  }
}
module.exports = Calculator
