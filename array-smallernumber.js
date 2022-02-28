
// function findSmallerNumber(number){

//     let smaller = number[0];
// for (let i=0; i<=number.length; i++){
//     let element = number[i];
// if(smaller > element){

//     smaller = element;

// }
// }
// return smaller;
// }

// var num = [40, 20, 30, 20, 32, 34, 12, 30];

// var smallerNumber = findSmallerNumber(num);
// console.log(smallerNumber)


function nextBiggest(arr) {
    let max = -Infinity, result = -Infinity;
  
    for (const value of arr) {
      const nr = Number(value)
  
      if (nr > max) {
        [result, max] = [max, nr] // save previous max
      } else if (nr < max && nr > result) {
        result = nr; // new second biggest
      }
    }
  
    return result;
  }
  
  const array = ['20','120','111','215','54','78'];
  console.log(nextBiggest(array));

