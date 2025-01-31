let marks = '';

if (marks) {
    if (marks >= 80) {
        console.log('A');
    }
    else if (marks >= 60) {
        console.log('B');
    }

    else if (marks >= 40) {
        console.log('C');
    }

    else {
        console.log('Fail');
    }
}

else {
    console.log('Please Enter A Mark');
}