const result = () => {
  const str = document.getElementById("inputTxt").value;
  if (str[0] === " " && str.length === 1) {
    return alert(null);
  } else {
  alert(isPalindrome(str.trim())); // remove spaces
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

btn.onclick = result;
