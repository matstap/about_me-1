'use strict';

var gender = prompt('Yes or no - are you a male?').toUpperCase();
console.log('gender:' + gender);

if (gender === 'N' || gender === 'no') {
  alert('I agree.');
} else {
  alert('That is not what your mom said.');
}

var suit = prompt('Yes or no - are you wearing a suit?').toUpperCase();
console.log('suit:' + suit);

if (suit === 'N' || suit === 'no') {
  alert('It is too hot for a suit anyway.');
} else {
  alert('You like to dress formal at all times.');
}

var hair = prompt('Yes or no - do you have brown hair?').toUpperCase();
console.log('hair:' + hair);

if (hair === 'N' || hair === 'no') {
  alert('I agree.');
} else {
  alert('Brunettes have more fun.');
}

var braces = prompt('Yes or no - do you wear braces?').toUpperCase();
console.log('braces:' + braces);

if (braces === 'N' || braces === 'no') {
  alert('You have nice teeth even without braces.');
} else {
  alert('Ouch.  I hope they come out soon.');
}
//
var siblings = prompt('Yes or no - do you have siblings?').toUpperCase();
console.log('siblings:' + siblings);

if (siblings === 'N' || siblings === 'no') {
  alert('Lucky you?');
} else {
  alert('Nice.  I have two siblings myself.');
}
