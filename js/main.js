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
    answer('Sorry an error has occurred');
  }
};
/*_____________________________Palindrome_with_recursion__________________________ */
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
/*_______________________________Palindrome_with_cycle____________________________ */

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

/*____________________________________Array-Form___________________________________ */

const answer2 = (str) => {
  const out = document.getElementById('Output2').innerHTML = str;
  return out;
};

const result2 = () => {
  try {
    const arr = document.getElementById("inputArray").value.trim().split();
    console.log(arr);
    if (arr === '') {
      return answer2('You have sent an empty string');
    } else {
      return answer2(sortArr(arr)); 
    }
  } catch {
    answer2('Sorry an error has occurred');
  }
};

/*____________________________________Cycle-for___________________________________ */


// const sortArr = (arr) => {
//   let unit;
//   for (let i = arr.length - 1; i > 0; i--) {
//     for (let b = 0; b < i; b++) {
//       if (arr[b] > arr[b + 1]) {
//         unit = arr[b];
//         arr[b] = arr[b + 1];
//         arr[b + 1] = unit;
//       }
//     }
//   } 
//   return arr;
// };

/*____________________________________Cycle-whille___________________________________ */


// const sortArr = (arr) => {
//   let unit;
//   let i = arr.length;
//   while (i > 0) {
//     i -= 1;
//     let b = 0;
//     while (b < i) {
//       b += 1;
//       if (arr[b] > arr[b + 1]) {
//         unit = arr[b];
//         arr[b] = arr[b + 1];
//         arr[b + 1] = unit;
//       }
//     }
//   } 
//   return arr;
// };

/*____________________________________Cycle-forEach___________________________________ */


const sortArr = (arr) => {
  let unit;
  for (let i = arr.length - 1; i > 0; i--) {
    arr.forEach(function(item, b) {
      if (arr[b] > arr[b + 1]) {
        unit = arr[b];
        arr[b] = arr[b + 1];
        arr[b + 1] = unit;
      }
    });
  } 
  return arr;
};

btn2.onclick = result2;