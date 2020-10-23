
// 3
var username = document.getElementById('username');
    console.log('username');
// 4
var user = document.getElementById('user');
    console.log(user);
// 5
var password = document.getElementById('password');
    console.log(password);
// 6
var userLabel = document.getElementById('userLabel');
    console.log('userLabel');
// 7
var userPassword = document.getElementById('userPassword');
    console.log('userPassword');
// 8
var rememberMe = document.getElementById('checkbox');
    console.log('checkbox');
// 9
var submitBtn = document.getElementById('submitBtn');
    console.log('submitBtn');

var form = document.getElementById('form');




// 10

username.addEventListener('focus', function (e) {
    username.style.color = 'blue';
    username.style.border = '1px solid lightblue';
});


username.addEventListener('blur', function (e) {
    username.style.color = '';
    username.style.border = '';
});


// 11

password.addEventListener('focus', function (e) {
    password.style.color = 'blue';
    password.style.border = '1px solid blue';
})

password.addEventListener('blur', function (e) {
    password.style.color = '';
    password.style.border = '';
})



// 12

submitBtn.addEventListener('click', function() {
    if (username.value === '' && password.value === '') {
        alert('Name and Password required');
    }
})














































































rememberMe.addEventListener('click', function(){
    if(rememberMe.checked){
        alert('Word, We will remember your password!');
    }
})






































































