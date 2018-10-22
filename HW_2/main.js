var colors = [{
    name: 'red',
    img: 'red-iphone.png',
    price: 200
}, {
    name: 'black',
    img: 'black1.png',
    price: 300
}, {
    name: 'silver',
    img: 'silver.png',
    price: 400
}];

var memories = [{
    val: 128,
    price: 700
}, {
    val: 256,
    price: 900
}, {
    val: 512,
    price: 1100
}];

var defaultImg = 'img/default.png';

var color;
var img = defaultImg;
var memory = 0;
var price_memory = 0;
var price_color = 0;

colors: while (true) {
    color = prompt('Color?');
    if (color === null) {
        alert('ПОКА!');
        break;
    }
    for (var i = 0; i < colors.length; i++) {
        if (color === colors[i].name) {
            img = colors[i].img;
            price_color = colors[i].price;
            break colors;
        }
    }
}

memories: while (img !== defaultImg) {
    memory = prompt('Memory?');
    if (memory === null) {
        memory = 0;
        alert('ПОКА!');
        break;
    }
    for (var i = 0; i < memories.length; i++) {
        if (+memory === memories[i].val) {
            price_memory = memories[i].price;
            break memories;
        }
    }
}

document.write('<img width="150" src="/home/toma/Courses/JavaScript/DZ/DZ_2/img/' + img + '">');
document.write('<h2>Price: ' + (price_color + price_memory) + '$</h2>');
document.write('<h3>Memory: ' + memory + 'GB</h3>');