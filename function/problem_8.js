function calculateGrade (marks) {
    if (marks >= 80) {
        console.log('A+');
    }
    else if (marks >= 70) {
        console.log('A');
    }
    else if (marks >= 60) {
        console.log('A-');
    }
    else if (marks >= 33) {
        console.log('Passed');
    }
    else {
        console.log('Fail');
    }
}

calculateGrade (30);
calculateGrade (50);