let w = 5;
let states = [];
function setup() {
	createCanvas(windowWidth, windowHeight - 100);
	arr = new Array(floor(width / w));
	for (let i = 0; i < arr.length; i++) {
		arr[i] = random(height);
		states[i] = -1;
	}
	bubble_sort();
}
let b = 0;
function draw() {
	// frameRate(10);
	background(0);
	for (let i = 0; i < arr.length; i += 1) {
		if (states[i] == 0) {
			fill("#FF0000");
		} else if (states[i] == 1) {
			fill("#7FFF00");
		} else {
			fill(255);
		}
		rect(i * w, height - arr[i], w, arr[i]);
	}
}

async function bubble_sort() {
	for (let a = 0; a < arr.length; a++) {
		for (b = 0; b < arr.length; b++) {
			if (arr[b] > arr[b + 1]) {
				await swap(arr, b, b + 1);
			}
		}
		states[arr.length - a - 1] = 0;
	}
	noLoop();
}

async function swap(array, first, sec) {
	states[first] = 1;
	await sleep(0);

	let temp = array[first];
	array[first] = array[sec];
	array[sec] = temp;
	states[first] = -1;
}

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
// let values = [];
// let w = 10;

// let states = [];

// function setup() {
// 	createCanvas(windowWidth, windowHeight);
// 	values = new Array(floor(width / w));
// 	for (let i = 0; i < values.length; i++) {
// 		values[i] = random(height);
// 		states[i] = -1;
// 	}
// 	quickSort(values, 0, values.length - 1);
// }

// async function quickSort(arr, start, end) {
// 	if (start >= end) {
// 		return;
// 	}
// 	let index = await partition(arr, start, end);
// 	states[index] = -1;

// 	await Promise.all([
// 		quickSort(arr, start, index - 1),
// 		quickSort(arr, index + 1, end),
// 	]);
// }

// async function partition(arr, start, end) {
// 	for (let i = start; i < end; i++) {
// 		states[i] = 1;
// 	}

// 	let pivotValue = arr[end];
// 	let pivotIndex = start;
// 	states[pivotIndex] = 0;
// 	for (let i = start; i < end; i++) {
// 		if (arr[i] < pivotValue) {
// 			await swap(arr, i, pivotIndex);
// 			states[pivotIndex] = -1;
// 			pivotIndex++;
// 			states[pivotIndex] = 0;
// 		}
// 	}
// 	await swap(arr, pivotIndex, end);

// 	for (let i = start; i < end; i++) {
// 		if (i != pivotIndex) {
// 			states[i] = -1;
// 		}
// 	}

// 	return pivotIndex;
// }

// function draw() {
// 	background(0);

// 	for (let i = 0; i < values.length; i++) {
// 		noStroke();
// 		// if (states[i] == 0) {
// 		// 	fill("#E0777D");
// 		// } else if (states[i] == 1) {
// 		// 	fill("#D6FFB7");
// 		// } else {
// 		// 	fill(255);
// 		// }
// 		rect(i * w, height - values[i], w, values[i]);
// 	}
// }

// async function swap(arr, a, b) {
// 	await sleep(50);
// 	let temp = arr[a];
// 	arr[a] = arr[b];
// 	arr[b] = temp;
// }

// function sleep(ms) {
// 	return new Promise((resolve) => setTimeout(resolve, ms));
// }
