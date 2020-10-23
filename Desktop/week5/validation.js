// var input = document.querySelector('input:type=text');

//     form.addEventListener('invalid', function (e) {
//         e.target.style.border = '1px solid red';
//     })

    
//     form.addEventListener('valid', function (e))



var form = document.querySelector('form');
var inputs = document.querySelectorAll('input'); // node list

form.addEventListener('submit', function (e) {
    console.log('submission');
    input.classList.add('validation');

})















//---- Advanced Array Methods


var results;
var numbers = [5, 3, 12, 100, 7];
var fruits = ['strawberries', 'bananas', 'apple', 'plums'];
var obs = [{name}]





// .sort()
results = fruits.sort();
results = numbers.sort(function(a, b) {
    return a - b; // descending order
});


results = numbers.sort(function (first, second) {
    if (first > second) {
        return 1; // returned positive value swaps first w/ second
    } else if (first < second) {
        return -1; // returned a negative value swaps the second number into the higher index position
    } else {
        return 0; // considered sorted
    }
})



// .find()
results = fruits.find(function (fruit) {
    if (fruit === 'apples') {
        return true; // returns apple
    }
})


results = numbers.find(function (fruit) {
    console.log(num);
    if (num > 10) {
        return true;
    }
})





// .map() : does something to every element of an array
results = numbers.map(function (num) {
    return num * 2;
});

results = fruits.map(function (fruit) {
    return fruit + '!';
})





// .filter()
results = numbers.filter(function(num) {
    if(num > 5) {
        return num;
    }
})

results = fruits.filter(function (fruit) {
    if(fruits > 6) {
        return fruit;
    }
})



result = objs.filter(function (obj) {
    if 
})




// reduce 
results = numbers.reduce(function (total, num) {

}, 0)














// .reduce()



div.innerHTML = results


//




// Javascript Timing


// JSON


{
    "key": "value",
    "key1": 5;

}



// convert your JS object into JSON

obj = JSON.stringify(obj);
    console.log(obj);
    console.log( typeof obj);

// convert your JSON string into a JS object
obj = JSON.parse(obj);

// sending and receiving in JSON is very important.