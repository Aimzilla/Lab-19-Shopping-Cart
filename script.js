
//arrays will be behind the scenes
var items = ["Banana", "Peanut butter", "Wine", "Vodka"];
var prices = ["$0.39", "$4.69", "$15.82", "$30.00" ];
var cart = [];

function addBanana(){
	cart.push(items[0], prices[0]);
	console.log(cart);
}

function addPeanutButter(){
	cart.push(items[1], prices[1]);
	console.log(cart);
}

function addWine(){
	cart.push(items[2], prices[2]);
	console.log(cart);
}

function addVodka(){
	cart.push(items[3], prices[3]);
	console.log(cart);
}

function checkout(){
	var total = 0;
	for (var i = 0; i<cart.lenth; i++){
		total = total + cart [i];
		//cart.push(total);
		console.log(total);
		cart.clear;
	}
}











/*
var total = 0;
//this for loop SHOULD pull the corresponding price for the item selected...right?!?!
for(var i = 0;i< items.length;i++){
	console.log(items[i], prices[i]);
}
total = (items[i], prices[i]);


