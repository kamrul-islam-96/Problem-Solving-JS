let arr = ['a', 'b', 'c', 'd', 'e'];

revercedArr = [];

console.log(arr);

while (arr.length > 0) {
    revercedArr.push(arr.pop());
}

console.log(revercedArr);

// Output: [ 'a', 'b', 'c', 'd', 'e' ]
//         [ 'e', 'd', 'c', 'b', 'a' ]