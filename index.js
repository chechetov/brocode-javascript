// 45 arrow function expression
// compact alternative to a traditional function expresssion

// One expression
const greeting = (userName) => console.log(`Hello ${userName}`);
const percent = (x,y) => x/y * 100;

// More than one
const doubleGreeting = (userName, anotherUserName) => {
	console.log(`Hello ${userName} and also ${anotherUserName}`);
	console.log(`Hello ${userName}`);
}

greeting("Bro");
doubleGreeting("Bro","Denys");
console.log(`${percent(35,50)}%`);

let grades = [100, 50, 90, 60, 80, 70];

grades.sort(descending);
grades.forEach(print);

function descending(x, y){
	return y - x;
}

function print(element){
	console.log(element);
}

