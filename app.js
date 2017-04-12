var inquirer = require("inquirer"); 
var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js"); 

function questions() { 
	inquirer.prompt ([ 
		{	
			type: "list", 
			message: "What type of card do you want to study?", 
			choices: ["Basic", "Cloze"], 
			name: "CardType"
		}
		
		]).then(function(card) { 

			if(card.CardType == "Basic") {
				basicQ();


			} 
			else { 
				clozeQ();
			}
			
		});
			
	}

var Q1 = new BasicCard("Where was the One Ring forged?", "Mount Doom");
var Q2= new ClozeCard("Smeagol led the hobbits through the path of ____ ______ to enter Mordor", "Cirith Ungol");

function basicQ () { 
	
	console.log(Q1.front);


	
	inquirer.prompt ([

		{
			type: "input", 
			message: " ",
			name: "answer"

		} 

		]).then(function (input) { 
			if (input.answer == "Mount Doom") { 
				console.log("Correct!");
			} 

			else {
				console.log("Wrong! The correct answer is Mount Doom");
			};
			questions();
		});
	
	
	
}; 

function clozeQ () { 
	
	console.log(Q2.partial);


	
	inquirer.prompt ([

		{
			type: "input", 
			message: " ",
			name: "answer"

		} 

		]).then(function (input) { 
			if (input.answer == "Cirith Ungol") { 
				console.log("Correct!");
			} 

			else {
				console.log("Wrong! The correct answer is Cirith Ungol");
			};
			questions();
		});
	
	
	
};

questions();
 
