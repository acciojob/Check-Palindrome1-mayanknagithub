// complete the given function

function palindrome(str){
	let newStr = str.lowercase();
	let isPalindrome = true;
	let i = 0;
	let j = str.length-1;

	while(i<=j){
		if(newStr[i]!=newStrstr[j]) {
			isPalindrome = false;
			break;
		}
		i++;
		j--;
	}
	return isPalindrome;
}

module.exports = palindrome
