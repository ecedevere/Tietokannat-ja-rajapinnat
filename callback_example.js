//1
//Kopioi alla oleva koodi tiedostoon callback_example.js ja suorita se.
setTimeout(doSomething,2000);
function doSomething(){
    console.log("Demonstrating the callbacks");
}
console.log("The application is started");

//2
//Tee ohjelma käyttäen anonyymiä funktiota (anonymous function)
setTimeout(function(){
    console.log("Demonstrating the callbacks");
} ,2000);
console.log("The application is started");


//3
//Tee ohjelma käyttäen nuolifunktiota (arrow function)
setTimeout(()=>{
    console.log("Demonstrating the callbacks");
} ,2000);
console.log("The application is started");
