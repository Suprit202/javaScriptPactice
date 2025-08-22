var collection = ["A","B","C","D","E","F","G"];

collection.pop(); //[ 'A', 'B', 'C', 'D', 'E', 'F' ]
collection.shift()  //[ 'B', 'C', 'D', 'E', 'F' ]
collection.splice(1,2) //[ 'B', 'E', 'F' ]
console.log(collection);  