// 39
// array.forEach() = execures a provided callback function
// once for each array element

let students = ["spongebob", "patrick", "squidward"];
students.forEach(capitalize);


function capitalize(element, index, array){
	array[index] = element[0].toUpperCase() + element.substring(1);
}

console.log(...students);