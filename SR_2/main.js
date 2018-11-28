// // Task 1
// var arr1 = [1, 2, 3, 4, 5, 6, 7, 8];

// var foo = function (el) {
// 		el += 10;	
// 		return el;
// }

// var map = function (fn, array)
// {
// 	var arr2 = [];
// 	for (var i = 0; i < array.length; i++) {
// 		arr2.push(fn(array[i]));
// 	}
// 	return arr2;
// }

// console.log(map(foo, arr1));

// Task 2
var sequence = function (start, step) {
    if (start === undefined) {
        start = 0;
    }
    if (step === undefined) {
        step = 1;
    }
    start -= step;
    return function () {
        return start += step;
    	}
}

var take = function (gen, x) {
	var mas = [];
	for (var i = 0; i < x; i++) {
			mas.push(gen2());
	}
	return mas;
}

var gen2 = sequence(0, 2);


console.log(take(gen2, 5));


