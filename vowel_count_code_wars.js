/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, and u as vowels for this Kata.

The input string will only consist of lower case letters and/or spaces.
*/

const getCount = (str) => {
  let vowelsCount = 0;
  let vowels = {
    a : 'a',
    e : 'e',
    i : 'i',
    o : 'o',
    u : 'u'
  }
  for(let i = 0; i < str.length; i++) {
    if(vowels[str[i]] === str[i]) {
      vowelsCount++;
    }
  }
  
  return vowelsCount;
}