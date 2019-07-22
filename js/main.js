// $(document).ready(function() {
//     btn.onclick = function() {
//         alert( 'Спасибо' );
//       }; 
// }); 


const result = () => {
    const strFromInput = document.getElementById("inputTxt").value;
    alert(isPalindrome(strFromInput));
};

const isPalindrome = (str) => {
    if (str.length === 1) {
      return true;
    } else if (str[0] === str[str.length - 1]) {
      const strWithoutOneAndLastChar = str.substring(1, str.length - 1);
      return isPalindrome(strWithoutOneAndLastChar);
    } 
    return false;
  };