const paymentSuccess = true;
const marks = 30;


function enroll (ms, message) {
    return new Promise (function(resolve, reject) {
        setTimeout(function() {
            if(paymentSuccess) {
                console.log(message);
                resolve();
            }else {
                reject('Payment Failed');
            }
        },ms)
    })
}


function progress (ms, message) {
    return new Promise (function (resolve, reject) {
        setTimeout(function () {
            if (marks >= 80) {
                console.log(message);
                resolve()
            } else {
                reject('You Failed The Cource')
            }
        },ms)
    })
}

function getCertificate (ms, message) {
    return new Promise (function(resolve) {
        setTimeout(function() {
            console.log(message);
            resolve();
        },ms)
    })
}


async function myFunction () {
    try {
        await enroll(2000, 'Payment Succesfull')
        await progress(3000, 'Cource Enrollment Successful')
        await getCertificate(4000, 'You Get The Certificate')
    } catch (err) {
        console.log('Error Occured:', err);
    }
}

myFunction();



// another way



const paymentSuccess = true;
const marks = 30;


function enroll (ms) {
    return new Promise (function(resolve, reject) {
        setTimeout(function() {
            if(paymentSuccess) {
                console.log('Payment Succesfull');
                resolve();
            }else {
                reject('Payment Failed');
            }
        },ms)
    })
}


function progress (ms) {
    return new Promise (function (resolve, reject) {
        setTimeout(function () {
            if (marks >= 80) {
                console.log('Cource Enrollment Successful');
                resolve()
            } else {
                reject('You Failed The Cource')
            }
        },ms)
    })
}

function getCertificate (ms) {
    return new Promise (function(resolve) {
        setTimeout(function() {
            console.log('You Get The Certificate');
            resolve();
        },ms)
    })
}


async function myFunction () {
    try {
        await enroll(2000)
        await progress(3000)
        await getCertificate(4000)
    } catch (err) {
        console.log('Error Occured:', err);
    }
}

myFunction();



// another way



const paymentSuccess = true;
const marks = 90;


function enroll () {
    return new Promise (function(resolve, reject) {
        setTimeout(function() {
            if(paymentSuccess) {
                resolve('Payment Succesfull');
            }else {
                reject('Payment Failed');
            }
        }, 1000)
    })
}


function progress () {
    return new Promise (function (resolve, reject) {
        setTimeout(function () {
            if (marks >= 80) {
                resolve('Cource Enrollment Successful')
            } else {
                reject('You Failed The Cource')
            }
        }, 2000)
    })
}

function getCertificate () {
    return new Promise (function(resolve) {
        setTimeout(function() {
            resolve('You Get The Certificate');
        }, 3000)
    })
}


async function myFunction () {
    try {
        let enrollMsg = await enroll()
        console.log(enrollMsg);

        let paymentMsg = await progress()
        console.log(paymentMsg);

        let certificateMsg = await getCertificate()
        console.log(certificateMsg);

    } catch (err) {
        console.log('Error Occured:', err);
    }
}

myFunction();






// তোমাকে ৩টি API কল করতে হবে, এবং প্রতিটি API কলের রেজাল্ট পরেরটাতে পাস করতে হবে। প্রতিটি API কলের জন্য Promise ব্যবহার করো।

// প্রথম API কল (api1) থেকে একটি নাম (name) পাওয়া যাবে।

// দ্বিতীয় API কল (api2) সেই নাম (name) নিয়ে কল হবে এবং একটি বয়স (age) রিটার্ন করবে।

// তৃতীয় API কল (api3) সেই বয়স (age) নিয়ে কল হবে এবং একটি মেসেজ (message) রিটার্ন করবে।

// তোমার কাজ হলো এই ৩টি API কল চেইন করে রেজাল্ট প্রিন্ট করা। যদি কোনো API কল ফেল করে, তাহলে .catch() দিয়ে error হ্যান্ডেল করতে হবে।



const API1 = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve('KAMRUL')
        }, 2000);
    })
}

const API2 = (name) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if(name === name){
                resolve(19)
            }else {
                reject('Invalid Name')
            }
        }, 3000);
    })
}

const API3 = (age) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(age >= 18) {
                resolve('You Are an Adult')
            }else {
                reject('You Are Minor')
            }
        }, 4000);
    })
}

const mainFunc = async () => {
    try {
        const name = await API1()
        console.log(`Name: ${name}`);
        const age = await API2(name)
        console.log(`Age: ${age}`);
        const message = await API3(age)
        console.log(`Message: ${message}`);
    }

    catch(err) {
        console.log(`Error Occured: ${err}`);
    }
}

mainFunc()

