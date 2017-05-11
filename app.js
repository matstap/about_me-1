'use strict';

var tally = 0;

var user = prompt('Hey, there! What\'s your name?');

var gender = prompt('Yes or no - Does Chris publish code to Github?').toUpperCase();
console.log('gender:' + gender);


if (gender === 'N' || gender === 'no') {
  alert('Incorrect.  You can find all of Chris\'s publicly available code here: https://github.com/taxpayer131.');
} else {
  alert('Correct! Find Chris\'s publicly available code here: https://github.com/taxpayer131.');
  tally++;
}

var suit = prompt('Yes or no - Do you think Chris carries a security clearance?').toUpperCase();
console.log('suit:' + suit);

if (suit === 'N' || suit === 'no') {
  alert('Incorrect.  Chris carries a Dept. of Defense Top Secret clearance and can work in most any Federal govt environment.');
} else {
  alert('Correct!  Chris carries a Dept. of Defense Top Secret clearance and can work in most any Federal govt environment.');
  tally++;
}

var hair = prompt('Yes or no - Chris prefers to work remotely.').toUpperCase();
console.log('hair:' + hair);

if (hair === 'N' || hair === 'no') {
  alert('Correct.  Chris prefers to work remotely only 1/3 of the time.');
} else {
  alert('Yes, but Chris prefers to work remotely only  1/3 of the time.');
  tally++;
}

var braces = prompt('Yes or no - do you wear braces?').toUpperCase();
console.log('braces:' + braces);

if (braces === 'N' || braces === 'no') {
  alert('You have nice teeth even without braces.');
  tally++;
} else {
  alert('Ouch.  I hope they come out soon.');
}
//
var siblings = prompt('Yes or no - are you interested in contacting Chris for a conversation?').toUpperCase();
console.log('siblings:' + siblings);

if (siblings === 'N' || siblings === 'no') {
  alert('Oh well, maybe next time.');
} else {
  alert('Great!  Send Chris an email at chris.stefan1844@gmail.com!  Thanks!');
  tally++;
}
  //Sixth Question

var number = ['3', '7', '9', '9', '23'];
var answer;/*= prompt('Pick a number between zero and 100.');*/
var flag = false;
var count = 1; // counts numberr of guesses

while (count <= 4 && flag === false) {
  answer = prompt('Pick a number between zero and 100.');
  for (var i=0; i < number.length; i++) {
  console.log('current number:', number[i]);

  if (answer === number[i]) {
  alert('Correct!');
  tally++;
  flag = true;
  break;
        }
      }
  if (flag === false && count < 4) {
  alert('No, guess again.');
  count++;
} else if (flag === false && count === 4){
  alert('You are out of guesses!');
  count++;
  }
}

/*for (var i=0; i < number.length; i++) {
console.log('current number:', number[i]);

if (answer === number[i]) {
alert('Correct!');
flag = true;
break;
      }
    }
if (!flag) {
alert('No, guess again.');
    }*/


// question 7
    var letters = ['a', 'b', 'c', 'd', 'e'];
    var guess;
    var flag = false;
    var count = 1; // counts number of guesses

    while (count <= 6 && flag === false) {
      guess = prompt('Pick a letter.');
      for (var i=0; i < letters.length; i++) {
      console.log('current letter:', letters[i]);

      if (guess === letters[i]) {
      alert('Correct!');
      tally++;
      flag = true;
      break;
            }
          }
      if (flag === false && count < 6) {
      alert('No, guess again.');
      count++;
    } else if (flag === false && count === 6){
      alert('You are out of guesses!');
      count++;
      }
    }

alert('That was fun, ' + user + '. You got ' + tally + ' correct!');
console.log(tally);

  /*Seventh Question
  var project = prompt('Can you guess how many coding projects Chris has participated in (You get four guesses.').toUpperCase();
  console.log('project:' + project);

  if (project === 3) {
    alert('Correct! Lucky guess!');
  } else {
    alert('Incorrect!  Try again');
  */
