// complete the given function

function palindrome(str){
	let isPalindrome = true;
	let i = 0;
	let j = str.length-1;

	while(i<=j){
		if(str[i]!=str[j]) {
			isPalindrome = false;
		}
		i++;
		j--;
	}
	if(isPalindrome == true){
		console.log("true");
	}
	else{
		console.log("false");
	}
}

module.exports = palindrome
