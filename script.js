const pwEl = document.getElementById('pw');
const copyBtn = document.getElementById('copy');
const lengthBtn = document.getElementById('length');
const upperBtn = document.getElementById('upper');
const lowerBtn = document.getElementById('lower');
const numberBtn = document.getElementById('number');
const symbolBtn = document.getElementById('symbol');
const generateBtn = document.getElementById('generate');

const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
const number = '0123456789';
const symbols = '!@#$%^&*()_+=';

function getUpperCase(){
	return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getLowerCase(){
	return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getNumber(){
	return number[Math.floor(Math.random() * number.length)];
}

function getSymbols(){
	return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {
	const len = lengthBtn.value;
	let password = '';

	if (upperBtn.checked) {
		password += getUpperCase();
	}

	if (lowerBtn.checked) {
		password += getLowerCase();
	}

	if (numberBtn.checked) {
		password += getNumber();
	}

	if (symbolBtn.checked) {
		password += getSymbols();
	}

	for (let i = password.length; i < len; i++){
		const x = generateX();
		password += x;
	}

	pwEl.innerText = password;
}

function generateX() {
	const xs = [];
	if (upperBtn.checked) {
		xs.push(getUpperCase())
	}
	if (lowerBtn.checked) {
		xs.push(getLowerCase());
	}
	if (numberBtn.checked) {
		xs.push(getNumber());
	}
	if (symbolBtn.checked) {
		xs.push(getSymbols());
	}

	if (xs.length === 0) return '';

	return xs[Math.floor(Math.random() * xs.length)]
}

generateBtn.addEventListener('click', generatePassword)

copyBtn.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    const password = pwEl.innerText;

    if (!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Password copied to clipboard");
});
