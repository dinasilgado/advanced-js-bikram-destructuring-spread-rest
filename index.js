// numero 1//
const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];
const [, ana] = empleados;
function imprime({ name, email }) {
    console.log({ name, email });
}
imprime(ana);

// numero 2//

const [{ email: emailLuis }] = empleados;

function imprimir(email) {
    console.log(email);
}
imprimir(emailLuis);

// numero 3//
let a = 5;
let b = 3;
 a = 3;
 b = 5;
 console.log(a)
 console.log(b)

 // numero 4//
 const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
  };
  const maximaHoy = HIGH_TEMPERATURES.today;
  const maximaManana = HIGH_TEMPERATURES.tomorrow;
  console.log(maximaHoy);
  console.log(maximaManana);

//numero 5 spread-rest //
function sumEveryOther (...numeros){
let suma = 0;
 for (let i = 0; i<numeros.length; i++){
suma += numeros[i]
 }
 return suma;
};
 console.log(sumEveryOther( 1, 2, 3, 4, 5));

// numero 6//
function addOnlyNums(...args) {
return args.filter(item => typeof item === 'number')
.reduce((sum, num) => sum + num, 0);
 }
 console.log(addOnlyNums(1, "perro", 2, 4));

//numero 7 //
 function countTheArgs(...args){
    return args.length;
 }
 console.log(countTheArgs("gato", "perro")); 

 // numero 8---- aun falta//
  function combineTwoArrays(array1, array2) {
    return [...array1, ...array2];
  }
  console.log(combineTwoArrays([1, 2, 3], [4, 5, 6])); 


  // numero 9//

  function onlyUniques(...args) {
    return [...new Set(args)];
}
console.log(onlyUniques("gato", "pollo", "cerdo", "cerdo"));

  //numero 10//
  function combineAllArrays(...arrays){
    return [].concat(...arrays); 
  }
  console.log(combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1])); 
   

//numero 11//
function sumAndSquare(...numbers) {
    return numbers.reduce((sum, num) => sum + (num * num), 0);
}
console.log(sumAndSquare(1, 2, 3, 4, 5, 6));


    
