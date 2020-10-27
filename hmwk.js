// 3
var username = document.getElementById('username');
    console.log('username');
// 4
var user = document.getElementById('user');
    console.log(user);
// 5
var password = document.querySelector('#password');
    console.log(password);
// 6
var userLabel = document.getElementById('userLabel');
    console.log('userLabel');
// 7
var passLabel = document.querySelector('#passLabel');
    console.log('userPassword');
// 8
var rememberMe = document.getElementById('checkbox');
    console.log('checkbox');
// 9
var submitBtn = document.getElementById('submitBtn');
    console.log('submitBtn');

var user = document.querySelector('#user');


var logout = document.querySelector('#logout');












// 10

username.addEventListener('focus', function (e) {
    username.classList.add('blue');
    username.classList.add('blue-border');
    userLabel.classList.add('blue');
});


username.addEventListener('blur', function (e) {
    username.classList.remove('blue');
    username.classList.remove('blue-border');
    userLabel.classList.remove('blue');
});


// 11

password.addEventListener('focus', function (e) {
    password.classList.add('blue');
    password.classList.add('blue-border');
    passLabel.classList.add('blue');
})

password.addEventListener('blur', function (e) {
    password.classList.remove('blue');
    password.classList.remove('blue-border');
    passLabel.classList.remove('blue');
})

rememberMe.addEventListener('click', function(e) {
    if (rememberMe.checked) {
        alert('We will remember your Username');
    }
})







// 12

submitBtn.addEventListener('click', function(e) {
    //e.preventDefault();
    if (username.value === '' && password.value === '') {
        username.classList.add('error');
        username.classList.add('label','error');
        userLabel.classList.add('error');
        password.classList.add('error');
        password.classList.add('label','error');
        passLabel.classList.add('error');
    } else if (username.value === '') {
        username.classList.add('error');
        username.classList.add('label','error');
        userLabel.classList.add('error');
    } else if (password.value === '') {
        password.classList.add('error');
        password.classList.add('label','error');
        passLabel.classList.add('error');
    } else {
        if (rememberMe.checked) {
            localStorage.setItem('username', username.value);
            sessionStorage.setItem('username', username.value);
        } else {
            localStorage.removeItem('username');
        }
        username.classList.remove('error');
        username.classList.remove('label','error');
        userLabel.classList.remove('error');
        password.classList.remove('error');
        password.classList.remove('label','error');
        passLabel.classList.remove('error');
        //user.innerHTML = username.value;
        // username.value = '';
        // password.value = '';
        // username.disabled = true;
        // password.disabled = true;
    }
});





window.addEventListener('load', function (e) {
    if (localStorage.getItem('username') !== null) {
        username.value = localStorage.getItem('username');
        rememberMe.checked = true;
    } 
    if (sessionStorage.getItem('username') !== null) {
        user.innerHTML = sessionStorage.getItem('username');
    }
});




logout.addEventListener('click', function (e) {
    sessionStorage.clear();
    window.location.replace('index.html');
})






















