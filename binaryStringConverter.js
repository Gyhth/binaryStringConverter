$(function() {
binaryStringConverter = new binaryStringConverterClass();
alert(binaryStringConverter.stringToBinary("TEST", true).join(" "));
alert(binaryStringConverter.binaryToString(binaryStringConverter.stringToBinary("TEST", true).join(" ")));
});

var binaryStringConverterClass = function(){};

binaryStringConverterClass.prototype = {
    
	stringToBinary: function(input, padding) {
		var output = new Array();
		for (i = 0; i < input.length; i++) {
			var binary = input[i].charCodeAt(0).toString(2);
			if (padding) {
				binary = this.leftPad(binary, "0", 8);
			}
			output.push(binary);
		}
		return output;
	},
	
	binaryToString: function(input, spaceCharacter) {
		var string = input.replace(/\s*[01]{8}\s*/g, function(binaryInput) {
			var returnString = String.fromCharCode(parseInt(binaryInput, 2));
			if (spaceCharacter !== undefined) {
				returnString = returnString + spaceCharacter;
			}
			return returnString;
		});
		return string;
	},
	
	leftPad: function(input, paddingCharacter, padToLength) {
		while (input.length < padToLength) {
			input = paddingCharacter + input;
		}
		return input;
	}
	
	
	
};

