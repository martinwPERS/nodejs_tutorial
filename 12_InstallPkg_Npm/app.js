//package.json
// 1:24:39
// holding all meta data for a project
// at command prompt enter > npm init
// then follow prompts to enter in data
// install lodash = npm install lodas
// uninstall lodash = npm uninstall lodas

const _ = require('lodash');
// 1 arg=array values, 2 arg=value to replace in array, 3 arg=start index, 4 arg=end index
let example = _.fill([1,2,3,4,5],"banana",1,4);
console.log(example);


