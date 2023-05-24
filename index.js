// 38
// callback = a function passed as an argument to another function.
// ensures that a function is not going to run before task completed
// helps us develop asynchronous code
// (When one function has to wait for another function)

sum(2, 3, displayConsole);
sum(2, 3, displayDOM);

function sum(x, y, callBack){
	let result = x + y;
	callBack(result);
}

function displayConsole(output){
	console.log(output);
}

function displayDOM(output){
	document.getElementById("myLabel").innerHTML = output;
}

