// Task 1
var arr = [3, 5, 7, 10, 50, 56, 80, 89, 37];  // 9 elements
var arr2 = [3, 5, 7, 10, 50, 56, 80, 89, 37];  // 9 elements
  
var pieceOfArr = function (array, start, amount) {
	if (amount - start >= array.length) {
        console.warn('Столько ячеек не существует');
        return null;
    }
    if (amount < 0) {
        console.warn('Такого куска нет');
        return null;
    }
    return array.slice(start, amount + start);
}

// console.log(arr2.slice(3, 7));
console.log(arr.splice(1, 7));
console.log(pieceOfArr(arr2, 1, 7));

// Task 2

// var mySlice = function (str) {
// 	if (str === '') {
// 		console.log('You enter nothing!')
// 		return NaN;
// 	}

// 	if (!(str)) {
// 		console.log('You choose CANCEL!')
// 		return null;
// 	}

// 	if (+str === 0) {
// 		console.log('You enter a 0!')
// 		return str;
// 	}

// 	if (+str) {
// 		console.log('You enter a number!')
// 		return str;	
// 	}

// 	if (typeof(str) === 'string') {
// 		console.log('You enter a string!')
// 		return NaN;
// 	}
// }

// var str = prompt("Enter something: ");
// console.log(mySlice(str));


// Task 3
// var sign_check = function (sign) {
// 	console.log('Its sign_check');
// 	var sign_mas = ["-", "+", "*", "/", "%", "^"];
// 	for (var i = 0; i < sign_mas.length; i++) {
// 		console.log("Good mas")
// 		if (sign == sign_mas[i]) {
// 			console.log("Good sign")
// 			return sign;
// 		}
// 	}
// 	return NaN;
// }

// var mySlice = function (str) {
// 	console.log('Its mySlice');
// 	if (str === '') {
// 		console.log('You enter nothing!')
// 		return NaN;
// 	}

// 	if (!(str)) {
// 		console.log('You choose CANCEL!')
// 		return null;
// 	}

// 	if (+str === 0) {
// 		console.log('You enter a 0!')
// 		return str;
// 	}

// 	if (+str) {
// 		console.log('You enter a number!')
// 		return +str;	
// 	}

// 	if (typeof(str) === 'string') {
// 		console.log('You enter a string!')
// 		return NaN;
// 	}
// }

// var calculator = function( first, second, sign) {
// 	console.log('Its calculator');
// 	if (mySlice(first) && mySlice(second) && sign_check(sign)) {
// 		if (sign == "*") {
// 			return +first * +second;
// 		}
// 		if (sign == "/") {
// 			return +first / +second;
// 		}
// 		if (sign == "+") {
// 			return +first + +second;
// 		}
// 		if (sign == "-") {
// 			return +first - +second;
// 		}
// 		if (sign == "^") {
// 			return +first ^ +second;
// 		}
// 		if (sign == "%") {
// 			return +first % +second;
// 		}
// 	}
// 	else 
// 	{
// 		console.log('Something went wrong!');
// 		return NaN;
// 	}
// }


// var first = prompt("Enter first number: ");
// var second = prompt("Enter second nuber: ");
// var sign = prompt("Enter sign: ");
// console.log(calculator(first, second, sign));

