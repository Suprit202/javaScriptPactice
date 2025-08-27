let items =[50, 60, 70, 10, 5, 40];

let max = items[0];

for(let item of items){
  if(item > max){
    max = item;
  }
}