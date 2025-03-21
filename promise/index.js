const paymentSuccess = true;
const marks = 90;


function enroll () {
    return new Promise (function(resolve, reject) {
        setTimeout(function() {
            if(paymentSuccess) {
                console.log('Cource Enrollment Success');
                resolve();
            }else {
                reject('Payment Failed');
            }
        },2000)
    })
}


function progress () {
    return new Promise (function (resolve, reject) {
        setTimeout(function () {
            if (marks >= 80) {
                console.log('You Fullfill the cource');
                resolve()
            } else {
                reject('You Failed The Cource')
            }
        },3000)
    })
}

function getCertificate () {
    return new Promise (function(resolve) {
        setTimeout(function() {
            console.log('You Get The Certificate');
            resolve();
        },4000)
    })
}


enroll()
    .then(progress)
    .then(getCertificate)
    .catch(function(err){
        console.log(err);
    })







// Another Way


const paySuccess = true;
const mark = 60;


function enroll () {
    return new Promise (function(resolve, reject) {
        setTimeout(function() {
            if(paySuccess) {
                resolve('Cource Enrollment Success');
            }else {
                reject('Payment Failed');
            }
        },2000)
    })
}

function progress () {
    return new Promise (function (resolve, reject) {
        setTimeout(function () {
            if (mark >= 80) {
                resolve('You Fullfill the cource')
            } else {
                reject('You Failed The Cource')
            }
        },3000)
    })
}

function getCertificate () {
    return new Promise (function(resolve) {
        setTimeout(function() {
            resolve('You Get The Certificate');
        },4000)
    })
}

enroll()
    .then(function(enrollResult) {
        console.log(enrollResult);
        return progress();
    })
    .then(function(progreesResult) {
        console.log(progreesResult);
        return getCertificate();
    })
    .then(function(getCertificateResult) {
        console.log(getCertificateResult);
    })
    .catch (function (err) {
        console.log(err);
    })




// Another Problem:

// একটি ই-কমার্স ওয়েবসাইটে অর্ডার প্রসেসিং করার জন্য নিচের ফাংশনগুলো তৈরি করতে হবে:

// placeOrder() → ইউজার অর্ডার প্লেস করলে ২ সেকেন্ড পর প্রমিস রিটার্ন করবে। যদি isOrderPlaced সত্য (true) হয়, তাহলে রিসলভ করবে, নাহলে রিজেক্ট করবে।
// processPayment() → ৩ সেকেন্ড পর চেক করবে isPaymentSuccessful কি না। সত্য হলে রিসলভ, নাহলে রিজেক্ট।
// shipOrder() → ৪ সেকেন্ড পর নিশ্চিত করবে যে অর্ডার শিপ হয়েছে কি না।

// তোমার কাজ:

// placeOrder(), processPayment(), এবং shipOrder() ফাংশনগুলো ইমপ্লিমেন্ট করতে হবে।
// .then() এবং .catch() ব্যবহার করে চেইনিং করতে হবে।


const isOrderPlaced = true;
const isPaymentSuccessful = false;

function placeOrder() {
    return new Promise (function(resolve, reject){
        setTimeout(function() {
            if (isOrderPlaced) {
                console.log('Order Placed Successfully.');
                resolve();
            }else {
                reject('Order placed Fail.')
            }
        }, 2000)
    })
}

function processPayment() {
    return new Promise (function(resolve, reject) {
        setTimeout(function() {
            if(isPaymentSuccessful) {
                console.log('Payment Processed Successfully.');
                resolve();
            }else {
                reject('Payment Failed')
            }
        }, 3000)
    })
}

function shipOrder() {
    return new Promise (function(resolve) {
        setTimeout(function() {
            console.log('Order Has Been Shipped.');
            resolve();
        }, 4000)
    })
}


placeOrder()
    .then(processPayment)
    .then(shipOrder)
    .catch(function(err) {
        console.log(err);
    })


// jodi payment fail hoi and tarpor o order ship kora lage to:

// .catch(function(err) {
//     console.log(err);
//     return Promise.resolve();
// })
// .then(shipOrder)
// .catch(function(err){
//     console.log(err);
// })





// Another Problem:


// তোমাকে ৩টি API কল করতে হবে, এবং প্রতিটি API কলের রেজাল্ট পরেরটাতে পাস করতে হবে। প্রতিটি API কলের জন্য Promise ব্যবহার করো।

// প্রথম API কল (api1) থেকে একটি নাম (name) পাওয়া যাবে।

// দ্বিতীয় API কল (api2) সেই নাম (name) নিয়ে কল হবে এবং একটি বয়স (age) রিটার্ন করবে।

// তৃতীয় API কল (api3) সেই বয়স (age) নিয়ে কল হবে এবং একটি মেসেজ (message) রিটার্ন করবে।

// তোমার কাজ হলো এই ৩টি API কল চেইন করে রেজাল্ট প্রিন্ট করা। যদি কোনো API কল ফেল করে, তাহলে .catch() দিয়ে error হ্যান্ডেল করতে হবে।


function API1 () {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve('Kamrul Islam');
        }, 1000);
    })
}

function API2 (name) {
    return new Promise (function(resolve, reject) {
        setTimeout(() => {
            if(name === 'Kamrul Islam') {
                resolve(25)
            }else {
                reject('Invalid Name')
            }
        }, 2000);
    })
}

function API3 (age) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if(age >= 25) {
                resolve('You are an adult')
            }else {
                reject('You are a minor')
            }
        }, 3000);
    })
}


API1 ()
    .then(function(name) {
        console.log(`Name: ${name}`);
        return API2(name);
    })
    .then(function(age) {
        console.log(`Age: ${age}`);
        return API3(age);
    })
    .then(function(message) {
        console.log(`Message: ${message}`);
    })
    .catch(function(err) {
        console.log(err);
    })





// Another Problem:


// তোমাকে ৩টি API কল (apiA, apiB, apiC) সমান্তরালে (parallel) কল করতে হবে। যে API টি প্রথমে রেসপন্স দেবে, তার রেজাল্ট প্রিন্ট করতে হবে। বাকি API কলগুলোকে ইগনোর করতে হবে।

function APIA () {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve('Ápi A Response')
        }, 2000);
    })
}

function APIB() {
    return new Promise (function(resolve, reject) {
        setTimeout(() => {
            resolve('Api B Response')
        }, 1000)
    })
}

function APIC() {
    return new Promise (function(resolve, reject) {
        setTimeout(() => {
            resolve('Api C Response')
        }, 500)
    })
}


Promise.race ([APIA(), APIB(), APIC()])
    .then(function(result) {
        console.log('First Response: ', result);
    })
    .catch(function(err) {
        console.log('Error: ', err);
    })






// Another Problem


// একটি অ্যাপ্লিকেশন ইউজারের ডাটা ফেচ করার জন্য তিনটি API কল করে। কিন্তু তিনটি API একসঙ্গে চালানোর পরেই রেসপন্স প্রিন্ট করবে।

// fetchUserData() → ২ সেকেন্ড পর ইউজারের নাম রিটার্ন করবে।
// fetchUserPosts() → ৩ সেকেন্ড পর ইউজারের পোস্ট লিস্ট রিটার্ন করবে।
// fetchUserComments() → ৪ সেকেন্ড পর ইউজারের কমেন্ট রিটার্ন করবে।
// তোমাকে Promise.all() ব্যবহার করে তিনটি API কল একসঙ্গে চালিয়ে সবগুলোর রেজাল্ট একসঙ্গে দেখাতে হবে।

// Expected Output:
// User Data: John Doe
// User Posts: ["Post 1", "Post 2", "Post 3"]
// User Comments: ["Nice Post!", "Great Content!", "Loved it!"]

function fetchUserData() {
    return new Promise (function(resolve, reject) {
        setTimeout(function() {
            resolve('User Data: John Doe')
        }, 2000)
    }) 
}

function fetchUserPosts() {
    return new Promise (function(resolve) {
        setTimeout(() => {
            resolve('User Posts: ["Post 1", "Post 2", "Post 3"]')
        }, 3000);
    })
}

function fetchUserComments() {
    return new Promise (function(resolve) {
        setTimeout(() => {
            resolve('User Comments: ["Nice Post!", "Great Content!", "Loved it!"]')
        }, 4000);
    })
}

Promise.all([fetchUserData(), fetchUserPosts(), fetchUserComments()])
    .then (function(results) {
        results.forEach(function(result) {
            console.log(result);
        });
    })
    .catch(function(err) {
        console.log('Error: ',err);
    })