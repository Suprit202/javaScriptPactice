var collection = ["A","C"];
collection.push("D");   //[ 'A', 'C', 'D' ]
collection.unshift("B");  //[ 'B', 'A', 'C', 'D' ]
collection.splice(0,0,"E");   //[ 'E', 'B', 'A', 'C', 'D' ]
collection.splice(3,0,"E");   //[ 'E', 'B', 'A', 'E', 'C', 'D' ]
console.log(collection);