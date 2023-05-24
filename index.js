// 37
// rest parameters = represents 
// an indefinite number of parameters
// (packs arguments into array)

let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

console.log(sum(a,b,c,d,e,c));

function sum(...numbers){
	
	let total = 0;

	for (let number of numbers){
		console.log("number: " + number);
		total += number;
	}
	return total;
}
