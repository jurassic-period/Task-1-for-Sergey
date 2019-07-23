const answer = (str) => {
  const out = document.getElementById('Output').innerHTML = str;
  return out;
};

const result = () => {
  try {
    const str = document.getElementById("inputTxt").value.trim();
    if (str === '') {
      return answer('You have sent an empty string');
    } else {
      return answer(isPalindrome(str)); // remove spaces
    }
  } catch {
    document.getElementById('Output').innerHTML = 'Sorry an error has occurred';
  }
};

const isPalindrome = str => {
  if (str.length === 1) {
    // base case to stop recursion
    return true;
  } else if (str[0] === str[str.length - 1]) {
    if (str.length === 2) {
      return true;
    }
    const strWithoutOneAndLastChar = str.substring(1, str.length - 1); // move deep into the working condition
    return isPalindrome(strWithoutOneAndLastChar);
  }

  return false;
};


// const isPalindromeSecond = (str) => { \\ backup option
//   let now = str;
//   for (;;) {
//     if (now[0] === now[str.length - 1]) {
//       now = str.substring(1, str.length - 1);
//     } if (now.length <= 1) {
//       return true;
//     } return false;
//   } 
// };

btn.onclick = result;
