const result = () => {
    const str = document.getElementById("inputTxt").value;
    if (str[0] === ' ') {   // Checking for empty space infront string

      if (str.length === 1) { // If it is just space
        return alert(null);
      } 

      else if (str[str.length - 1] === ' ') {  // Checking for empty space infront and after string
      const cutSpace = str.substring(1, str.length - 1);
      alert(isPalindrome(cutSpace));
      } 

      else {    
      const cutSpace = str.substring(1);  // if we have only 1 space infront string
      alert(isPalindrome(cutSpace));
      }
    } 

    else if (str[str.length - 1] === ' ') {    // if we have only 1 space after string
    const cutSpace = str.substring(0, str.length - 1);
    alert(isPalindrome(cutSpace));
    } 
    else {
    alert(isPalindrome(str));
    }   
};

const isPalindrome = (str) => {
    if (str.length === 1) {   // base case to stop recursion
      return true;
    } 

    else if (str[0] === str[str.length - 1]) {
    const strWithoutOneAndLastChar = str.substring(1, str.length - 1); // move deep into the working condition
    return isPalindrome(strWithoutOneAndLastChar);
    } 

    return false;
  };