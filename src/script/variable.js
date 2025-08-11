'use strict'

//Var
// Available for function scope
var user_name;          //declartion
var name = 'Sai'        //Initialization
surname = 'lite'        //Assignment
user_name = 'John';     //Assignment
user_name = 'David';    //Re-Assignment
var name = 'Jay'        //Shadowing
var surname;            //hoisting
console.log(user_name);
console.log(surname);
console.log(name);



// let
//Available for block Scope   //"Closure"
let price;                    //declaration
price = 2000;                 //Assignment
let product = 'apple';        //Initialization
// let product = 'Banana';    //Shadowing Not Available 

// rate = 50;
// let rate;                  //hoisting not available
// console.log(rate);



//Const                    //Block Scope
const stock = 'available'; //Only allow initailiazation: not declaration,assignmet, hoisting, shadowing