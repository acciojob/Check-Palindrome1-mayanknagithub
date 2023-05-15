// complete the given function

function palindrome(str){
	let str1 = '';
	for (let index = str.length-1; index >= 0; index--) {
		str1.concate(charAt(index));
	}
	if(str==str1){
		return true;
	}
	else{
		return false;
	}
}

module.exports = palindrome
