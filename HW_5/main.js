var characters = [
	{name: 'barney', age: 36},
	{name: 'fred', age: 40}
];

var pluck = function (char, prop) {
	console.log(prop);
	var new_arr = [];
	for (var i = 0; i < char.length; i++) {
		new_arr.push(char[i][prop]);
	}
	return new_arr;
}

console.log(pluck(characters, 'age'));