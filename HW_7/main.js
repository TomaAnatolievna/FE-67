function Hamburger(size, stuffing) {
  if (size == Hamburger.SIZE_SMALL || size == Hamburger.SIZE_LARGE) {
   this.size = size;
  } else if (size == undefined) {
    throw new HamburgerException("HamburgerException: no size given");
  } else if (size != Hamburger.SIZE_SMALL || size != Hamburger.SIZE_LARGE) {
    throw new HamburgerException("HamburgerException: invalid size " + size.name);
  } 
  
  if (stuffing == Hamburger.STUFFING_CHEESE || stuffing == Hamburger.STUFFING_SALAD || stuffing == Hamburger.STUFFING_POTATO) {
   this.stuffing = stuffing;
  } else if (stuffing == undefined) {
    throw new HamburgerException("HamburgerException: no stuff given");
  } else if (stuffing != Hamburger.SIZE_SMALL || stuffing != Hamburger.SIZE_LARGE) {
    throw new HamburgerException("HamburgerException: invalid stuff " + stuffing.name);
  }
  
  this.topping = [];
  
  this.menu = {
    SIZE_SMALL: {price: 50, calories: 20},
    SIZE_LARGE: {price: 100, calories: 40},
    
    STUFFING_CHEESE: {price: 10, calories: 20},
    STUFFING_SALAD: {price: 20, calories: 5},
    STUFFING_POTATO: {price: 15, calories: 10},
    
    SAUCE_SAUCE: {price: 15, calories: 0},
    SAUCE_MAYO: {price: 20, calories: 5}
  };
}

Hamburger.SIZE_SMALL = 'SIZE_SMALL';
Hamburger.SIZE_LARGE = 'SIZE_LARGE';

Hamburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
Hamburger.STUFFING_SALAD = 'STUFFING_SALAD';
Hamburger.STUFFING_POTATO = 'STUFFING_POTATO';

Hamburger.TOPPING_SPICE = 'TOPPING_SPICE';
Hamburger.TOPPING_MAYO = 'TOPPING_MAYO';

Hamburger.prototype.addTopping = function(topping) {
    for (var i = 0; i < topping.length; i++) {
    if (this.topping.indexOf(topping[i]) == -1) {     
      if (topping[i] == Hamburger.TOPPING_SPICE || topping[i] == Hamburger.TOPPING_MAYO) {
       this.topping.push(topping[i]);
      } else if (topping[i] != Hamburger.TOPPING_SPICE || topping[i] != Hamburger.TOPPING_MAYO) {
        throw new HamburgerException("HamburgerException: no topping given");
      } 
    } else {
        throw new HamburgerException("HamburgerException: duplicate topping " + topping[i].name);
    }
  }
}

Hamburger.prototype.calculatePrice = function() {
  var price = this.menu[this.size]['price'] + this.menu[this.stuffing]['price'];
  
  if (this.topping.length != 0) {
    for (var i = 0; i < this.topping.length; i++) {
        price += this.menu[this.topping[i]]['price'];
    }
  }
 
  return price;
}

Hamburger.prototype.calculateCalories = function() {
  var calories = this.menu[this.size]['calories'] + this.menu[this.stuffing]['calories'];
  
  if (this.topping.length != 0) {
    for (var i = 0; i < this.topping.length; i++) {
        calories += this.menu[this.topping[i]]['calories'];
    }
  }
  
  return calories;
}

function HamburgerException(message) {
  this.name = "HamburgerException";
  this.message = message;

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, HamburgerException);
  } else {
    this.stack = (new Error()).stack;
  }
}

var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
hamburger.addTopping([Hamburger.TOPPING_MAYO]);
console.log("Calories: %f", hamburger.calculateCalories());
console.log("Price: %f", hamburger.calculatePrice());
hamburger.addTopping([Hamburger.TOPPING_SPICE]);
console.log("Price with sauce: %f", hamburger.calculatePrice());

// не передали обязательные параметры
var h2 = new Hamburger(); // => HamburgerException: no size given

// передаем некорректные значения, добавку вместо размера
var h3 = new Hamburger(Hamburger.TOPPING_SPICE, Hamburger.TOPPING_SPICE); 
// => HamburgerException: invalid size 'TOPPING_SAUCE'

// добавляем много добавок
var h4 = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
hamburger.addTopping(Hamburger.TOPPING_MAYO);
hamburger.addTopping(Hamburger.TOPPING_MAYO); 
// HamburgerException: duplicate topping 'TOPPING_MAYO'