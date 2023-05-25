// 43
// sort an array of numbers

let grades = [100, 50, 90, 60, 80, 70];

grades = grades.sort(descendingSort);
grades.forEach(print);


function descendingSort(x, y){
	return y - x;
}

function print(element){
	console.log(element);
}