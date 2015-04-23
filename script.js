
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
	value = (Math.round(value * 100) /100);
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
				return (Math.round(object.price * 100) /100);
			};
}

function buttonClicker(object, array, countId, averagePriceId) {
	
		User.cash = User.cash - object.price;
		if (User.cash > 0 ) {
			array.push(object.price);
			User.cash = (Math.round(User.cash * 100) / 100);
			$("#totalCash").html("<p>How much money you have: $" + User.cash + "</p>");
			object.quantity++;
			$(countId).html("<p>Quantity:" + object.quantity + "</p>" ); // use .html()
			$(averagePriceId).html("<p>Average Price: $" + avgPrice(array) + "</p>");
		} else {
			User.cash = User.cash + object.price;
			alert("You don't have the money to buy that!");
		}
	

}

$(document).ready(function(){

	$("#openButton").on("click", function(){
		$("#applePrice").html( "$" + Apple.price);
		$("#orangePrice").html( "$" + Orange.price);
		$("#bananaPrice").html( "$" + Banana.price);
		$("#pearPrice").html( "$" + Pear.price);
		setInterval(function() {
		$("#applePrice").html( "$" + priceChange(Apple ));
		$("#orangePrice").html( "$" + priceChange(Orange ));
		$("#bananaPrice").html( "$" + priceChange(Banana ));
		$("#pearPrice").html( "$" + priceChange(Pear ));

	},3000); // Change to 15,000
});
// Buy things


	$("#appleButton").on('click', function() {
		buttonClicker (Apple, appleArray, "#appleCount", "#avgApplePrice");
	});

	// add if/else statements to all these below things

	$("#orangeButton").on('click', function() {
		buttonClicker (Orange, orangeArray, "#orangeCount", "#avgOrangePrice");
	});

	$("#bananaButton").on('click', function() {
		buttonClicker (Banana, bananaArray, "#bananaCount", "#avgBananaPrice");
	});
	$("#pearButton").on('click', function() {
		buttonClicker (Pear, pearArray, "#pearCount", "#avgPearPrice");
	});

	$("#totalCash").text("How much money you have: $" + User.cash);
	console.log(User.cash); // fix this -- its nots subtracting
});


// $("#appleButton").on('click', function() {
// 		User.cash = User.cash - Apple.price;
// 		if (User.cash > 0 ) {
// 			appleArray.push(Apple.price);
// 			User.cash = (Math.round(User.cash * 100) / 100);
// 			$("#totalCash").html("<p>How much money you have: $" + User.cash + "</p>");
// 			Apple.quantity++;
// 			$("#appleCount").html("<p>Quantity:" + Apple.quantity + "</p>" ); // use .html()
// 			$("#avgApplePrice").html("<p>Average Price: $" + avgPrice(appleArray) + "</p>");
// 		} else {
// 			User.cash = User.cash + Apple.price;
// 			alert("You don't have the money to buy that!");
// 		}
// 	});



