const answer = (str) => {
  const out = document.getElementById('Output').innerHTML = str;
  return out;
};

const result = () => {
  const str = document.getElementById("inputTxt").value.trim();
  if (str === '') {
    return answer('You have sent an empty string');
  } else {
    return answer(isPalindromeSecond(str)); // remove spaces
  }
};

// const isPalindrome = str => {
//   if (str.length === 1) {
//     // base case to stop recursion
//     return true;
//   } else if (str[0] === str[str.length - 1]) {
//     if (str.length === 2) {
//       return true;
//     }
//     const strWithoutOneAndLastChar = str.substring(1, str.length - 1); // move deep into the working condition
//     return isPalindrome(strWithoutOneAndLastChar);
//   }

//   return false;
// };


const isPalindromeSecond = (str) => {
  let now = str;
  for (;;) {
    if (now[0] === now[str.length - 1]) {
      now = str.substring(1, str.length - 1);
    } if (now.length <= 1) {
      return true;
    } return false;
  } 
};

btn.onclick = result;
