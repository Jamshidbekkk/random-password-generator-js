const passwordBox = document.getElementById('password');
const length = 12;

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const number = '0123456789';
const symbol = '@#$%^&*()_+~|}{[]></-=';

const allChars = upperCase + lowerCase + number + symbol;


//! Createpassword function

function createPassword() {
    let password = '';

    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    passwordBox.value = password;
};


//! Adding click event to generate a random password

const mainBtn = document.getElementById('mainBtn');

mainBtn.addEventListener('click', createPassword);


//! Copy function

function copyPassword () {
    passwordBox.select();
    document.execCommand('copy');
}

//! Adding click event to copy the generated random password

const copyImg = document.getElementById('img');

copyImg.addEventListener('click', copyPassword);
