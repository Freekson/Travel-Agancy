const { tree } = require("gulp");

//code here
document.getElementById('type-btn-1').onclick = function() {
    document.getElementById('type-btn-2').classList.remove('under-block_active');
    document.getElementById('type-btn-3').classList.remove('under-block_active');
    document.getElementById('type-btn-4').classList.remove('under-block_active');
    document.getElementById('type-btn-1').classList.add('under-block_active');
}
document.getElementById('type-btn-2').onclick = function() {
    document.getElementById('type-btn-1').classList.remove('under-block_active');
    document.getElementById('type-btn-3').classList.remove('under-block_active');
    document.getElementById('type-btn-4').classList.remove('under-block_active');
    document.getElementById('type-btn-2').classList.add('under-block_active');
}
document.getElementById('type-btn-3').onclick = function() {
    document.getElementById('type-btn-1').classList.remove('under-block_active');
    document.getElementById('type-btn-2').classList.remove('under-block_active');
    document.getElementById('type-btn-4').classList.remove('under-block_active');
    document.getElementById('type-btn-3').classList.add('under-block_active');
}
document.getElementById('type-btn-4').onclick = function() {
    document.getElementById('type-btn-1').classList.remove('under-block_active');
    document.getElementById('type-btn-3').classList.remove('under-block_active');
    document.getElementById('type-btn-2').classList.remove('under-block_active');
    document.getElementById('type-btn-4').classList.add('under-block_active');
}

//1
function getSquare() {
    console.log(this.width * this.height);
    return this.width * this.height
}

const rectangle = {
    width: 40,
    height: 200,
    getSquare
};
rectangle.getSquare();

//2

function getPrice() {
    console.log(this.price);
    return this.price;
}

function getPriceWithDiscount() {
    console.log(this.price - (this.price / 100 * parseInt(this.discount)));
    return this.price - (this.price / 100 * parseInt(this.discount));
}
const price = {
    price: 10,
    discount: '15%',
    getPrice,
    getPriceWithDiscount

};

price.getPrice(); // 10

price.getPriceWithDiscount(); // 8.5

//3


function val() {
    return this.value
}
const obj = {
    value: 200,

    inc: function() {
        console.log(this.value + 1);
        return this.value + 1;
    },

    dec: function() {
        console.log(this.value - 1);
        return this.value - 1;
    },

    mult: function() {
        console.log(this.value * this.value);
        return this.value * this.value;
    },
};
obj.val();
obj.inc().dec().mult();

//4

function getSum() {
    console.log(this.price * this.quantity);
    return this.price * this.quantity;
}

const rectangle = {
    price: 40,
    quantity: 100,
    getSum
};
const newObj = {
    price = 10,
    quantity = 20,
}
rectangle.getSum();
newObj.getSum();

//5
let sizes = {
    width: 5,
    height: 10
};
getSquare = function() {
    return this.width * this.height
}
getSquare.call(sizes);

//6

let element = {
    height: 25,
    getHeight: function() {
        console.log(this.height);
        return this.height;
    }

};
let getElementHeight = element.getHeight();
console.log(getElementHeight);

//7
function minus(x = 0) {
	return function(y = 0){
  	console.log(x-y);
    return x-y;
  };
}
minus()();

//8
function multiplyMaker(x) {
	let num = x;
	return function(y){
    return (num*=y);
  };
}
const multiply = multiplyMaker(2);
console.log(multiply(2));
console.log(multiply(1));
console.log(multiply(3));
console.log(multiply(10));

//9

function Modul(x) {
	let str = x;
	return {
  	addStr(value) {
    	if(typeof value === 'number'){
      	str = String(value);
      }
      if (value === ''){
       	str = '';
      }
      if(typeof value === 'string'){
      	str = value;
      }
      return str;
    },
    viewStr() {
    	console.log(str);
    },
    lenStr() {
    	console.log(str.length);
    },
    backStr() {
    	console.log(str.split("").reverse().join(""));
    }
  }
}
const mod = Modul();
mod.addStr('abcde');
mod.viewStr();
mod.lenStr();
mod.backStr();

//10
function setValue(x) {
	let num = x;
	return {
  	add(value) {
    	num += value;
    },
    min(value) {
    	num -= value;
    },
    mult(value) {
    	num *= value;
    },
    div(value) {
    	num /= value;
    },
    val() {
    	console.log(num);
    }
  }
}
const mod = setValue(10);
mod.add(5);
mod.min(3);
mod.div(2);
mod.mult(10);
mod.val();

//11
function foo(x, ...others) {
	let obj= {
  	firstEl: x,
    others: others
  }
	console.log(obj);
	return obj;
}
foo('a', 'b', 'c', 'd');

//12
const organisation = {
	name: 'Google',
	info: { 
  	employees: ['Vlad', 'Olga'],
  	partners: ['Microsoft', 'Facebook', 'Xig']
  }
};
function getInfo({name, info: {partners:[first, second, ...others]} = {}} = {}) {
	console.log('Name: ' + name);
  console.log('Partners: ' + first + ', ' + second);
}
getInfo(organisation);

//13
let user = {
    guid: "dd969d30-841d-436e-9550-3b0c649e4d34",
    isActive: false,
    balance: "$2,474.46",
    age: 30,
    eyeColor: "blue",
    name: "Tameka Maxwell",
    gender: "female",
    company: "ENOMEN",
    email: "tamekamaxwell@enomen.com",
    phone: "+1 (902) 557-3898",
    tags: [
      "aliquip",
      "anim",
      "exercitation",
      "non",
    ],
    friends: [
      {
        id: 0,
        name: "Barber Hicks"
      },
      {
        id: 1,
        name: "Santana Cruz"
      },
      {
        id: 2,
        name: "Leola Cabrera"
      }
    ],
  };

//const {name, balance, email, tags:[first, , ,last], friends:[{id, name:frName} ={}]} = user;
//console.log(name, balance, email, first, last, frName);
const { guid, isActive, balance, age, eyeColor, name, gender, company, email, phone, ...others} = user;
console.log(others);
