
function deepEqual(param1, param2) {
    // Code goes here
    if ((typeof param1) === 'object' && (typeof param2) === 'object') {
        var arrayProperties1 = Object.keys(param1);
        var arrayProperties2 = Object.keys(param2);
        if (arrayProperties1.length === arrayProperties2.length) {
            for(var i = 0; i < arrayProperties1.length; i++) {
                if(!deepEqual(param1[arrayProperties1[i]], param2[arrayProperties2[i]]))
                    return false;
            }
            return true;
        }
        return false;

    }

    if( param1 === param2)
        return true;

    return false;
}


var john = {
    firstName: 'John',
    lastName: 'Doe'
}

console.log('Test 1:', deepEqual(1, 1)) // true
console.log('Test 2:', deepEqual(1, '1')) // false
console.log('Test 3:', deepEqual(john, john)) // true
console.log('Test 4:', deepEqual(john, { firstName: 'John', lastName: 'Doe' })) // true
console.log('Test 5:', deepEqual(john, { firstName: 'John' })) // false
