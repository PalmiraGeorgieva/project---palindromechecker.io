document.getElementById("check-btn").addEventListener("click", function() {
    let inputField = document.getElementById("text-input");
    let result = document.getElementById("result");
    let text = inputField.value.trim(); 

    if (text === "") {  
        alert("Please input a value.");  
        return;
    }

    const cleanedTxt = text.replace(/[\W_]/g, "").toLowerCase();

    if (cleanedTxt === "") {
        alert("Please enter at least one alphanumeric character.");
        return;
    }
    
    let isPalindrome = true;

    for (let i = 0; i < Math.floor(cleanedTxt.length / 2); i++) {
      if(cleanedTxt[i] !== cleanedTxt[cleanedTxt.length - 1 - i]) {
        isPalindrome = false;
        break;
      }
    }
    if (isPalindrome) {
      result.innerHTML = text + " is a palindrome";
      result.style.color = "green";
    } else {
      result.innerHTML = text + " is not a palindrome";
      result.style.color = "red";
    }
});