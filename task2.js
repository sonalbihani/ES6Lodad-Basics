
let arr = ['blue','black','red','orange','pink','green','white','blue','orange'];

//chunk
let ch = _.chunk(arr,2);
console.log(ch);

//pull
_.pull(arr,'orange','pink');
console.log(arr);

//difference
console.log(_.difference([2,3,4],[3,4,9,0]));

//take
console.log(_.take(arr));
console.log(_.take(arr,3));

//filter
arr = [2,4,25,67,-1,0,100,44,10]
console.log(_.filter(arr, function(a){
    return a < 50;
}));

//find
console.log(_.find(arr, function(a){
    return a < 50;
}));

//sum
console.log(_.sum(arr));

//reduce
console.log(_.reduce(arr,function(mult,i){
    return mult*i;
},1));

//gte
console.log(_.filter(arr, function(a){
    return _.gte(a,50)}));

//keys

var obj = {
    name: "Sonal",
    lastn: "Bihani",
    age: 21,
    gender: "Female"
}

//keys
console.log(_.keys(obj));

//values
console.log(_.values(obj));

//camelCase
console.log(_.camelCase('sonal--__bihani--'));

// endsWith
console.log(_.endsWith('harbour','our'));

// tail
arr = [2,4,25,67,-1,0,100,44,10];
console.log(_.tail(arr));

// union
let a = [1,2,3,4,5];
let b = [3,4,5,6,5,7];
console.log(a);
console.log(b);
console.log("Union: ",_.union(a,b));











