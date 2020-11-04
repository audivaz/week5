//! I added some feedback here on what you have added some additional feedback to explain what I did in a solution. Checkout the solutions folder.
// 3
var username = document.getElementById('username');
// console.log('username');
// 4
var user = document.getElementById('user');
// console.log(user);
// 5
var password = document.getElementById('password');
// console.log(password);
// 6
// var userLabel = document.getElementById('userLabel'); //? We can't use this here as we don't have any HTML elements with the id of userLabel
var userLabel = document.querySelector('label[for=username]');
// console.log('userLabel');
// 7
// var userPassword = document.getElementById('userPassword'); //? I think this was supposed to be passLabel.
var passLabel = document.querySelector('label[for=password]');
// console.log('userPassword');
// 8
var rememberMe = document.getElementById('checkbox');
// console.log('checkbox');
// 9
var submitBtn = document.getElementById('submitBtn');
// console.log('submitBtn');

var form = document.getElementById('form');

// 10

username.addEventListener('focus', function (e) {
	//? We could use the classes provided in the CSS to do this as well.
	// username.style.color = 'blue';
	// username.style.border = '1px solid lightblue'; //? Just want a bottom border not a border all around. check out the line below.
	// username.style.borderBottom = '1px solid lightblue';
	username.classList.add('blue-border');
	userLabel.classList.add('blue');
});

username.addEventListener('blur', function (e) {
	// username.style.color = '';
	// username.style.border = '';
	username.classList.remove('blue-border');
	userLabel.classList.remove('blue');
});

// 11

password.addEventListener('focus', function (e) {
	//? Same deal look at the username listener.
	password.style.color = 'blue';
	password.style.border = '1px solid blue';
});

password.addEventListener('blur', function (e) {
	//? Same deal look at the username listener.
	password.style.color = '';
	password.style.border = '';
});

// 12

submitBtn.addEventListener('click', function () {
	if (username.value === '' && password.value === '') {
		alert('Name and Password required');
	}
	//? Check in the solutions folder to see the rest of this.
});

rememberMe.addEventListener('click', function () {
	//? Good job this works great!
	if (rememberMe.checked) {
		alert('Word, We will remember your password!'); //? Haha this made me chuckle, I like to say word all the time.
	}
});
