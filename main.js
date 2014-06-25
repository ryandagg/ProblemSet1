// Takes a single string parameter and capitalizes the first letter of each word in the string.
var function letterCapitalize(str) { 
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
var function wordCount(str) { 
    return str.match(/ /g).length + 1;
}

// Takes a single number parameter and returns true if the parameter is a prime number, otherwise false.
var function primeTime(num) {
	
}