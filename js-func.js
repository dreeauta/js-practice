
//Write a JavaScript function that reverse a number.
function reverse(num) {
  return num.toString().split('').reverse('').join('');
}

console.log(reverse(33243))


// Write a JavaScript function that checks whether a passed string is palindrome or not?


function palin(pal) {
  var reversed = pal.split('').reverse().join('');
  if (reversed === pal) {
    return true;
  }
}

console.log(palin('noon'));


// Write a method smash that takes an array of words and smashes them together into a 
// sentence and returns the sentence. You can ignore any need to sanitize words or add
//  punctuation, but you should add spaces between each word. Be careful, there shouldn't
//   be a space at the beginning or the end of the sentence!

function smash(words) {
  //  var sentence = words.join();
  //  var rep = sentence.replace(/,/g ,' ')
 return words.join(' ')
}

console.log(smash(['word', 'hello','yes', 'combine']))



// Write function avg which calculates average of numbers in given list.

function find_average(array) {
  var temp = 0;
  for (var i = 0; i < array.length; i++){
    temp = array[i] + temp  
    var avg = temp/(array.length)  
  }
  
  return avg
}

console.log(find_average([1,2,3]))

// or

function avg(arr) {
 return array.reduce((a,b) => (a + b))/ arr.length
}

console.log(find_average([1,2,3]))


// Write a function, gooseFilter/goose_filter/GooseFilter, that takes an array 
// of strings as an argument and returns a filtered array containing the same
//  elements but with the 'geese' removed.


function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  var filter = birds.filter(function(elem) {
    return geese.indexOf(elem) < 0
  })
  return filter
  
};

console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
))



// Write function bmi that calculates body mass index (bmi = weight / height ^ 2).
// 
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

function bmi(weight, height) {
  var bmi = weight/(height * height);
  
  if (bmi <= 18.5) {
    return 'Underweight';
  }
  else if ( bmi <= 25.0) {
    return 'Normal'
  }
  else if (bmi <= 30) {
    return 'Overweight'
  }
  else if (bmi > 30) {
    return 'Obese'
  }
}

console.log( bmi(80,1.8))

// or 

function bmi(weight, height) {
 let bmi = weight / (height * height);
 switch(true){
   case bmi <= 18.5:
     return "Underweight";
   case bmi <= 25.0:
     return "Normal";
   case bmi <= 30.0:
     return "Overweight";
   case bmi > 30:
     return "Obese";
  }
}




// given a number, find its opposite.

function opposite(number) {
  return(-number);

}

console.log(opposite(5))






