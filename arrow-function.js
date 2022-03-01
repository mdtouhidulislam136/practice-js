// map: it throw a loop inside a object and return an array as a output. 

const friend = ['robin', 'mahmud', 'sadaf', 'sajal'];

//const result = name.map(x => console.log(x.length));

// forEach: same like map but it does not return any array.
//const name = ['robin', 'mahmud', 'sadaf', 'sajal'];

const result2 = friend.map(x => x);
// filter: throw a loop with logic, show all element in an array
const result3 = friend.filter(x => x.length < 6);

//find: according to the logic it will show first element only which one fulfil the logic

const result4 = friend.find(x => x.length < 6);

console.log(result4)