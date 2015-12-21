// As a user, I can add, subtract, multiply and divide two numbers.
// Bonus User Story: I can keep chaining mathematical operations together until I hit the equal button, and the calculator will tell me the correct output.

var display = 0;
var register = [];
var answer = 0;

function operations(a, b, operator) {
	switch (operator) {
		case "+":
			answer = eval(a+b)
			break;
		case "-":
			answer = eval(a-b)
			break;
		case "*":
			answer = eval(a*b)
			break;
		case "/":
			answer = eval(a/b)
			break;
		default:
			answer = a;
	}
	return answer;
}

function numberDisplay (input) {
	display = display + input.val();
	$(".displayText").html(+display);
}

$(document).ready(function () {
	$(".displayText").html(display);

	$(".clear").click(function () {
		display = 0;
		register = [0,0,0];
		$(".displayText").html(display);
	})
	
	$(".plusminus").click(function () {
		display = -display;
		$(".displayText").html(display);
	})
	
	$(".calcNum").click(function () {
		numberDisplay($(this));
	})
	
	$(".calcOp").click(function() {
		register[0] = +display;
		register[1] = $(this).val();
		answer = register.slice(0);
		display = 0;
		console.log(answer);
	});
	
	$(".equals").click(function() {
		operations(register[0], +display, register[1]);
		$(".displayText").html(answer);
	})
})