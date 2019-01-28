const calculator = {
  plus: function(a,b){
    return a+b;
  },
  minus: function(a,b){
    return a-b;
  },
  multiply : function(a,b){
    return a*b;
  },
  divide: function(a,b){
    return a/b;
  }
}

const plus = calculator.plus(1,3)
const minus = calculator.minus(10,7)
const multiply = calculator.multiply(2,3)
const divide = calculator.divide(10,2)
console.log(`plus: ${plus}, minus: ${minus}, multi: ${multiply},divide: ${divide}`)
