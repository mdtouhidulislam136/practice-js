// var number1 = 30;
// var number2 = 40;
// var number3 = 20;

// console.log(Math.max(number1, number2,number3))

// 
// function average(number){
//     var sum = 0;
//    for(let i = 0; i< number.length; i++){
//        var element = number[i];
//        sum = sum +element;

//        var average = (sum/number.length);
//    }
// return average;

// }

// let arr= [23, 45,33,34,54,33]

// let avaragearr = average(arr);

// console.log(avaragearr);


// area of an rectagle using function

function rectangle(width, length){
let area = width * length;

return area;
}

let TotalArea = rectangle(10, 20);
console.log(TotalArea);


function secondlargestnumber(number){
    var largest = 0;
   for(let i = 0; i< number.length; i++){
       var element = number[i];
      if(largest < element)
          largest = element
          
   }
return largest;

}

let arr= [23, 45,33,34,54]

let secondlargest = secondlargestnumber(arr);

console.log(secondlargest);

