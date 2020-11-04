//! There are many ways to improve this, but this is my by the prompt solution. I can show some better ways to implement this sometime if you think that would be beneficial. For now I just went through and explained what was happening on each code block to explain the homework assignment since you seemed to be having some trouble with it.
var username = document.querySelector('#username');
var user = document.querySelector('#user');
var password = document.querySelector('#password');
var userLabel = document.querySelector('label[for=username]');
var passLabel = document.querySelector('label[for=password]');
var rememberMe = document.querySelector('input[type=checkbox]');
var submitBtn = document.querySelector('button[type=submit]');
var logout = document.querySelector('#logout');

//? Listen on the username input for "focus" event. We want to modify both the username input and the userLabel label when the user focus's on the username input field.
username.addEventListener('focus', function (e) {
	userLabel.classList.add('blue'); //? Add the class of blue on userLabel
	e.target.classList.add('blue-border'); //? Add the class of blue-border on e.target, which is what made the event fire. In this instance it would be our username input field.
});

//? Pretty much the same as the above listener, except its just listening for blur, which is the opposite of focus. Thus we are removing all of the classes we added in focus off of those elements
username.addEventListener('blur', function (e) {
	userLabel.classList.remove('blue'); //? Same thing but removing instead of adding.
	e.target.classList.remove('blue-border');
});

//? Same deal as we're just dealing with password input (password) & password Label (passLabel) instead of username & userLabel
password.addEventListener('focus', function (e) {
	passLabel.classList.add('blue');
	e.target.classList.add('blue-border');
});

password.addEventListener('blur', function (e) {
	passLabel.classList.remove('blue');
	e.target.classList.remove('blue-border');
});

//? Here we are adding an event listener to execute the associated code block, sort of like if stmts gatekeeper except its only true when the event is being fired.
rememberMe.addEventListener('click', function (e) {
	//? Check if rememberMe input box has been checked. If so we want to alert a message to the user.
	if (e.target.checked) {
		alert(
			"We will remember your username. (But not for real though b/c I haven't taught you to do that yet)"
		);
	}
});

//? This event is fired anytime the submit button is clicked.
submitBtn.addEventListener('click', function (e) {
	// e.preventDefault(); //? We want to turn this off or our validation wouldn't be working. Instructions say to do so.

	//? Check if they left both input boxes empty. We want to check this one first b/c if we checked for if only username was empty they could both be empty skip that as in a if/elseif/else block it only does the first true it finds. So we want to check both first then each individually
	if (username.value === '' && password.value === '') {
		//? Make them red if they left both blank
		userLabel.classList.add('error');
		username.classList.add('error');
		passLabel.classList.add('error');
		password.classList.add('error');
	} else if (username.value === '') {
		//? check if just username was left empty make it red if it is. At this point we know that username and password were NOT both blank, but that doesn't mean that only one was empty so lets check that.
		userLabel.classList.add('error');
		username.classList.add('error');
		passLabel.classList.remove('error');
		password.classList.remove('error');
	} else if (password.value === '') {
		//? check if just password was left empty make it red if it is. We know both password and username we not empty and just username was not empty.
		passLabel.classList.add('error');
		password.classList.add('error');
		userLabel.classList.remove('error');
		username.classList.remove('error');
	} else {
		//? If we get here something had to be input in both username & password, we know this b/c to get here neither both were empty, nor was username empty, nor was password empty so therefore there must be some input in each.
		passLabel.classList.remove('error'); //? All of these removals of the error class are removing the red b/c we know they are both good at this point
		password.classList.remove('error');
		userLabel.classList.remove('error');
		username.classList.remove('error');
		sessionStorage.setItem('user', username.value); //? Set user in session storage so we can check for it on page reload and display the user in the nav bar. '
		//? Check if rememberMe box has been checked again
		if (rememberMe.checked) {
			localStorage.setItem('username', username.value); //? If true we want to set username's value in local storage. which we will check on page reload and set the username input value to be whatever was passed here at this point.
		} else {
			localStorage.removeItem('username'); //? If unchecked we want to remove if form localStorage so the username is not automatically populated in the input box.
		}
		// user.innerHTML = username.value;
		// username.value = '';
		// password.value = '';
		// username.setAttribute('disabled', '');
		// password.setAttribute('disabled', '');
	}
});

//? Listen for a click on the logout button
logout.addEventListener('click', function () {
	sessionStorage.removeItem('user'); //? Destroy the session variable
	window.location.replace('index.html'); //? Refresh the page.
});

//? After the page finishes loading run this code
window.addEventListener('load', function () {
	//? If we have a variable in localStorage username and it doesn't equal null
	if (localStorage.getItem('username') !== null) {
		//? If it wasn't null i.e. not set to begin with we want to get that value and set the username input to it.
		username.value = localStorage.getItem('username');
		rememberMe.checked = true; //? We also want the box to remain checked on refresh
	}

	//? Check if a variable of user has been set in session storage
	if (sessionStorage.getItem('user') !== null) {
		//? If we get inside this code block there must have been some value stored in user in session storage
		user.innerHTML = sessionStorage.getItem('user'); //? set the username in the navbar
	}
});
