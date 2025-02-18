// one
var heading = document.getElementById ('headingOne');
var element = document.createElement ('h1');
var text = document.createTextNode ('This is heading one create by javaScript');

element.appendChild(text);
heading.appendChild(element);





// two
var numeralName = document.getElementsByClassName ('numeral-name');
var students = ['Kamrul', 'Tahsin', 'Selim', 'Jerin', 'Sinthia'];

for (var i = 0; i < numeralName.length; i++) {
    numeralName[i].innerHTML = `I am learning full stack at Sadhinota Camp. My name is ${students [i]}`
};




// three
var studentList = document.getElementById ('student-list');
var students = ['Kamrul', 'Tahsin', 'Selim', 'Jerin', 'Sinthia'];

for (var i = 0; i < students.length; i++) {
    var element = document.createElement ('h2');
    var text = document.createTextNode (`Hi, I am a student of Sadhinota Camp and My name is ${students [i]}`);
    element.appendChild(text);
    studentList.appendChild (element);
};

// shortCut Method
// for (var i = 0; i < students.length; i++) {
//     var element = document.createElement ('h2');
//     element.innerText = (`Hi, I am a student of Sadhinota Camp and My name is ${students [i]}`);
//     studentList.appendChild (element);
// };

