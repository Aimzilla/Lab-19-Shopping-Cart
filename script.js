
//arrays will be behind the scenes
var items = ["Banana", "Peanut butter", "Wine", "Vodka"];
var prices = [0.39, 4.69, 15.82, 30.00 ];//removed strings to enable calculation
var cart = [];

function addBanana(){
	cart.push(prices[0]);//removed item from cart; only adding price
	console.log(cart);
}

function addPeanutButter(){
	cart.push(prices[1]);//removed item from cart; only adding price
	console.log(cart);
}

function addWine(){
	cart.push(prices[2]);//removed item from cart; only adding price
	console.log(cart);
}

function addVodka(){
	cart.push(prices[3]);//removed item from cart; only adding price
	console.log(cart);
}

function checkout(){
var total = 0;	
	for (var i = 0; i<cart.length; i++){
		total = total + cart[i];
		//cart.push(total);
		cart.clear;
	}console.log("$" + total);//moved print out of the loop
}











/*
var total = 0;
//this for loop SHOULD pull the corresponding price for the item selected...right?!?!
for(var i = 0;i< items.length;i++){
	console.log(items[i], prices[i]);
}
total = (items[i], prices[i]);
*/

