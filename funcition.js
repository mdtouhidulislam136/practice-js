function multiplacatinTable(num1, num2) {
  
  while(num2<=10) {

    console.log(num2 ,"x 13 =" , (num1* num2))
    num2++
  }





}

multiplacatinTable(13, 1)


function uppercaseToLowercase(name ) {



var nameToLowercase = name.toLowerCase();
return nameToLowercase;


}

var lowercaseName = uppercaseToLowercase("MD TOUHIDUL ISLAM")

console.log(lowercaseName)

function Name(first_name, last_name) {
    var fullName = first_name + " " + last_name;
    return fullName;
}

var nam = Name("Md Touhidul", "Islam")

console.log(nam)


function squre(num) {

    var sqr = (num *num);
    return sqr;
}

var squreOutPut = squre(125);
console.log(squreOutPut);

const pizza = {

    toppings: ['cheese', 'sauce', 'pepperoni'],
   
    crust: 'deep dish',
   
    serves: 2
   
   }

var printValue = pizza.toppings[2];

console.log(printValue);
