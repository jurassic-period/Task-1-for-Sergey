const result = () => {
    const str = document.getElementById("inputTxt").value;
    if (str[0] === ' ') {

      if (str.length === 1) {
        return alert(null);
      } 

      else if (str[str.length - 1] === ' ') {
      const cutSpace = str.substring(1, str.length - 1);
      alert(isPalindrome(cutSpace));
      } 

      else {
      const cutSpace = str.substring(1);
      alert(isPalindrome(cutSpace));
      }

    } 
      else if (str[str.length - 1] === ' ') {
      const cutSpace = str.substring(0, str.length - 1);
      alert(isPalindrome(cutSpace));
      } 
      else {
      alert(isPalindrome(str));
      }   
};

const isPalindrome = (str) => {
    if (str.length === 1) {
      return true;
    } 

    else if (str[0] === str[str.length - 1]) {
    const strWithoutOneAndLastChar = str.substring(1, str.length - 1);
    return isPalindrome(strWithoutOneAndLastChar);
    } 
    
    return false;
  };