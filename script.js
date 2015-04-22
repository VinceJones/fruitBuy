
var i;
var value;
var appleArray = [];
var orangeArray = [];
var bananaArray = [];
var grapeArray = [];
var pearArray = [];
// var price = randomNumber(1,4)

var Apple = {
	name: "Apple",
	price: randomNumber(1,5),
	quantity: 0,
	avgPrice: avgPrice( appleArray )
	}

var Orange = {
	name: "Orange",
	price: randomNumber(1,5),
	quantity: orangeArray.length,
	avgPrice: avgPrice( orangeArray )
	}

var Banana = {
	name: "Banana",
	price: randomNumber(1,5),
	quantity: bananaArray.length,
	avgPrice: avgPrice( bananaArray )
	}
var Pear = {
	name: "Pear",
	price: randomNumber(1,5),
	quantity: pearArray.length,
	avgPrice: avgPrice( pearArray )
	}


var User = {
	cash: 100
}

function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}

function avgPrice(array) {
	value = 0;

	for (i = 0; i < array.length; i++){
		value+=array[i];
	}
	value /= array.length;
	return value;
}

function priceChange(object) {
	
		value = ( randomNumber(-50, 50) / 100);
		object.price = value + object.price;

			if (object.price > 9.99) {
				return object.price = 9.99;
			} else if ( object.price < 0.5 ) {
				return object.price = 0.5;
			} else {
				return object.price;
			};
}

$(document).ready(function(){

	setInterval(function() {
		$("#applePrice").text( "$" + priceChange(Apple ));
		$("#orangePrice").text( "$" + priceChange(Orange ));
		$("#bananaPrice").text( "$" + priceChange(Banana ));
		$("#pearPrice").text( "$" + priceChange(Pear ));

	},3500); // Change to 15,000

// Buy things

	$("#appleButton").on('click', function() {
		User.cash = User.cash - Apple.price;
		if (User.cash > 0 ) {
			appleArray.push(Apple.price);
			// add cash deduction here
			Apple.quantity++;
			$("#appleCount").text("Quantity:" + Apple.quantity); // use .html()
			$("#avgApplePrice").text("Average $:" + avgPrice(appleArray));
		} else {
			User.cash = User.cash + Apple.price;
			alert("You don't have the money to buy that!");
		}
	});

	// add if/else statements to all these below things

	$("#orangeButton").on('click', function() {
		orangeArray.push(Orange.price);
		$("#orangeCount").text("Quantity:" + Orange.quantity);
		$("#avgOrangePrice").text("Average $:" + avgPrice(orangeArray));
	});
	$("#bananaButton").on('click', function() {
		bananaArray.push(Banana.price);
		Banana.quantity+=1;
		$("#bananaCount").text("Quantity:" + Banana.quantity);
		$("#avgBananaPrice").text("Average $:" + avgPrice(bananaArray));
	});
	$("#pearButton").on('click', function() {
		pearArray.push(Pear.price);
		Pear.quantity+=1;
		$("#pearCount").text("Quantity:" + Pear.quantity);
		$("#avgPearPrice").text("Average $:" + avgPrice(pearArray));
	});

	$("#totalCash").text("How much money you have: $" + User.cash);
	console.log(User.cash); // fix this -- its nots subtracting
});



