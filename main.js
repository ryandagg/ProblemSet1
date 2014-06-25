// Takes a single string parameter and capitalizes the first letter of each word in the string.
var letterCapitalize = function(str) { 
  var ans = str[0].toUpperCase();
  for (var i = 1; i < str.length; i++) {
    if (str[i] == ' ') {
      ans += ' ' + str[i + 1].toUpperCase();
      i ++
    }
    else {ans += str[i] }
  }
  return ans; 
         
}

// Takes a single string parameter and returns the number of words the string contains (ie. "Never eat shredded wheat" would return 4).
var wordCount = function(str) { 
    return str.match(/ /g).length + 1;
}

// Takes a single number parameter and returns true if the parameter is a prime number, 
// otherwise false.
// how to solve? square the number, iterate through dividing num by each. Figure out 1&2.
var primeTime = function(num) {
	if (num === 1) {
    return false;
  }
  if (num === 2) {
    return true;
  }

  var sqrt = Math.ceil(Math.pow(num, 0.5));

  for(var i = 2; i <= sqrt; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}