var collection = ["A","B","C","D","E","F","G"];

var collection = ["A","B","C","A","E","A","G"];

// var result = collection.find(value =>{
//   return value == "A";
// });

var result = collection.filter(value =>{    //[ 'A', 'A', 'A' ]
  return value == "A";
});

console.log(result);