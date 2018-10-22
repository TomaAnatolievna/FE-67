var memory;
var memory_choose;
var tel_color;
var price;
var memories = [
	{
		volume: "128",
		price: "500"
	}, 

	{
		volume: "256",
		price: "700"
	}, 

	{
		volume: "512",
		price: "1000"
	}
]

var colors = [
	{
		name: 'red'
	},

	{
		name: 'black'
	},

	{
		name: 'blue'
	},

	{
		name: 'silver'
	},

	{
		name: 'gold'
	}
]

var x = true;
while (x) {
	tel_color_choose = prompt('Choose color: black, blue, red, silver, gold: ');

	if (tel_color_choose === null) {
		confirm('Bye!');
        break;
	}

	for (var i = 0; i < colors.length; i++) {
		if(colors[i].name === tel_color_choose) {
			document.write('<h2>Your phone looks like</h2>' + '<br>' + '<img src="'+colors[i].name+'.jpg">');
			x = false;
			break;
		}
	}
}


var y = true;
if (tel_color_choose)
{
	while (y) {
		memory_choose = prompt('Choose memory: 128, 256, 512: ');
		if (+memory_choose) {
			for (var i = 0; i < memories.length; i++) {
				console.log("first");
				if (memory_choose === memories[i].volume) {
					document.write('<h2>Your phone memory = </h2>' + memories[i].volume);
					document.write('<h2>Price of your phone = </h2>' + memories[i].price);
					break;
				}	
			}
		}
		else {
			confirm('Bye-bye!');
		}
		break;
	}
}




	// if (tel_color_choose === 'black') {
 //        document.write('<h2>Your phone looks like</h2>' + '<br>' + '<img src="black.jpg">');
 //        break;
 //    }
 //    else if (tel_color_choose === 'blue') {
	//         document.write('<h2>Your phone looks like</h2>' + '<br>' + '<img src="blue.jpg">');
	//         break;
	//     }
	// else if (tel_color_choose === 'red') {
	//         document.write('<h2>Your phone looks like</h2>' + '<br>' + '<img src="red.jpg">');
	//         break;
	//     }
	// else if (tel_color_choose === 'silver') {
	//         document.write('<h2>Your phone looks like</h2>' + '<br>' + '<img src="silver.jpg">');
	//         break;
	//     }
	// else if (tel_color_choose === 'gold') {
	//         document.write('<h2>Your phone looks like</h2>' + '<br>' + '<img src="gold.jpg">');
	//         break;
	//     }
	// else if (tel_color_choose === null) {
	// 		confirm('Bye!');
	//         break;
	// }