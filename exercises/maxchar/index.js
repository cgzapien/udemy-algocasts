// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const obj = {};
  let max = 0;
  let maxChar = ""
  for(const char of str){
    if(!obj[char]) {
      obj[char] = 1;
    } else {
      obj[char]++
    }
  }
  // for( let [key, value] of Object.entries(obj)){
  //   if(value > max){
  //     max = value;
  //     maxChar = key
  //   }
  // }
  for (let char in obj) {
    if(obj[char] > max){
      max = obj[char]
      maxChar = char
    }
  }
  return maxChar
}

module.exports = maxChar;
