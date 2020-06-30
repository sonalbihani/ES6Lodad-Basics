const _ = require("lodash");
let arr = ['blue','black','red','orange','pink','green','white','blue','orange'];

let ch = _.chunk(arr,2);
console.log(ch);

_.pull(arr,'orange','pink');
console.log(arr);

console.log(_.difference([2,3,4],[3,4,9,0]));

console.log(_.take(arr));
console.log(_.take(arr,3));

_.filter(a)


