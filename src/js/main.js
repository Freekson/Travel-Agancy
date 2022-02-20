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
