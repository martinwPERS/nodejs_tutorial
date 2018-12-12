const sum = (num1, num2) => num1 + num2;
const PI = 3.14;
class SomeMathObject{
    constructor(){
        console.log('object created');
    }
}
//#1 module export
// module.exports.sum = sum;
// module.exports.PI = PI;
// module.exports.SomeMathObject = SomeMathObject;

//#2 export object literal with tagged properties
module.exports = {sum : sum, PI : PI, SomeMathObject : SomeMathObject}