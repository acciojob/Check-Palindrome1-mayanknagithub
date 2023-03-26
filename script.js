// complete the given function

function palindrome(str){
	let str1 = '';
	for (let index = str.length-1; index >= 0; index--) {
		str1.concate(charAt(index));
	}
	if(str==str1){
		console.log(str,'is a palindrome');
	}
	else{
		console.log(str,'is not a palindrome');
	}
}
module.exports = palindrome
