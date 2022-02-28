function task2(min, max){
    
    

    for(var i=min; i<=max; i++)
    {
        if (i % 2 == 0){
            console.log(i);
        } 
    }

    for(var i=min; i<=max; i++)
    {
        if (i % 2 != 0){
            console.log(i);
        } 
    }

   
}

 task2(3,7);

