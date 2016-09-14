document.addEventListener('DOMContentLoaded', function() {

	var input = prompt('Please enter a number');

	var type = typeof(input);
	console.log(type);
	

	if (input % 1 != 0) {
		alert('Please use whole numbers');
	} else {
		
		// Convert string into integer
		input = parseInt(input, 10);
		type = typeof(input);
		console.log(type);

		document.write("<h1>Fizz Buzz</h1>");

		for (var i = 1; i <= input; i++) {
			document.write("<br>");
			if (i % 15 === 0) {
				document.write("FizzBuzz");
			} else if (i % 3 === 0) {
				document.write("Fizz");
			} else if (i % 5 === 0) {
				document.write("Buzz");
			} else {
				document.write(i);
			}
		};

	}

}, false);
