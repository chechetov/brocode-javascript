// 46: shuffle array

let cards = ["A", "2","3","4","5","6","7","8","9","10","J","K","Q"];

shuffle(cards);

function shuffle(array){

	let currentIndex = array.length;

	while (currentIndex != 0){
		let randomIndex = Math.floor(Math.random() * array.length);
		currentIndex -=1;

		let temp = array[randomIndex];
		array[randomIndex] = array[currentIndex];
		array[currentIndex] = temp;
	}
}

const print = (thing) => {
	console.log(thing);
}

print(cards);
