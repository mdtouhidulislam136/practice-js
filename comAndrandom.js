

function task1() {
    var num1 = Math.floor(Math.random()*10) +1;
    var num2 = Math.floor(Math.random()*10) +1;

    if(num1 < num2) {
        console.log(num1 + " is less than " + num2)
    }

    else if(num1 > num2 ){
        console.log(num1 + " is grater than " + num2);
    }

    else if (num1 == num2){
        console.log(num1 + " is equal to " + num2)
    }

// from the above function no posibilites to get else, so I did not use it

}

task1();



