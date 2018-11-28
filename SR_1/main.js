///////////SR_1///////////////

// var arr = Array(3, 5, -3, 6, 143, 7, 12, -87, 54, 32, -78, 5, 43);

// var min = arr[0];
// for (var i = 0; i < arr.length; i++) {
//     if (min > arr[i]) {
//         min = arr[i];
//     }
// }
// console.log(min);

// var max = arr[0];
// for (var i = 0; i < arr.length; i++) {
//     if (max < arr[i]) {
//         max = arr[i];
//     }
// }
// console.log(max);

// var sum = 0;
// for (var i = 0; i < arr.length; i++) {
//     // sum = sum + arr[i];
//     sum += arr[i];
// }
// var average = sum / arr.length;

// console.log(sum);
// console.log(average);



// var arr = [3, 5, -3, 6, 143, 7, 12, -87, 54, 32, -78, 5, 43];
// var arr2 = [3, 5, -3];

// console.log(arr);

// var x = arr.push('NEW');
// var x = arr.push(['NEW', 'NEW1', 'NEW2']);
// var x = arr.pop();
// var x = arr.unshift('NEW');
// var x = arr.shift();
// var x = arr.concat('NEW', 'NEW1', 'NEW2');
// var x = arr.concat(arr2);
// var x = arr.slice(3);
// var x = arr.splice(3, 8);
// var x = arr.splice(3, 0, 'NEW', 'NEW1', 'NEW2');
// var x = arr.splice(3, 0, ['NEW', 'NEW1', 'NEW2']);
// var x = arr.splice(3, 3, 'NEW', 'NEW1', 'NEW2');
// var x = arr.join('');
// console.log(x);
// var x = x.split('-')
// document.write(arr.join(' | '));

// console.log(x);
// console.log(arr);

// var x = 'me';
// var man = {
//     name: 'Bob',
//     age: 35
// }
// man.surname = 'Brown';

// console.log(man.name);
// console.log(man['na' + x]);
// console.log(man.surname);
// console.log(man);


// var goods = ['ручка', 'карандаш', 'фломастер'];

// var user = {
//     name: 'Bob',
//     email: 'bob@gmail.com',
//     age: 45,
// };
// console.log(user.email);



// var colors = [{
//     name: 'red',
//     img: 'red-iphone.png'
// }, {
//     name: 'black',
//     img: 'black1.png'
// }, {
//     name: 'silver',
//     img: 'silver.png'
// }];

// var memories = [{
//     val: 128,
//     price: 700
// }, {
//     val: 256,
//     price: 900
// }, {
//     val: 512,
//     price: 1100
// }];

// var defaultImg = 'default.png';



// var color;
// var img = defaultImg;
// var memory = 0;
// var price = 0;
// colors: while (true) {
//     color = prompt('Color?');
//     if (color === null) {
//         alert('ПОКА!');
//         break;
//     }
//     for (var i = 0; i < colors.length; i++) {
//         if (color === colors[i].name) {
//             img = colors[i].img;
//             break colors;
//         }
//     }
// }

// memories: while (img !== defaultImg) {
//     memory = prompt('Memory?');
//     if (memory === null) {
//         memory = 0;
//         alert('ПОКА!');
//         break;
//     }
//     for (var i = 0; i < memories.length; i++) {
//         if (+memory === memories[i].val) {
//             price = memories[i].price;
//             break memories;
//         }
//     }
// }

// document.write('<img width="150" src="../img/' + img + '">');
// document.write('<h2>Price: ' + price + '$</h2>');
// document.write('<h3>Memory: ' + memory + 'GB</h3>');
