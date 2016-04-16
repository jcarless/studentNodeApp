var fs = require('fs');
var prompt = require('prompt');
var student = require('./student.js');
var bus = require('./bus.js');
var newStudent = '';
var aStudent = '';
var addStudent = function(){
	prompt.start();
  prompt.get(['name', 'gender', 'grade', 'gpa', 'detentions', 'sleepingInClass', 'catchPhrase', 'addAnotherStudent', 'Remove_This_Student'], function (err, result) {
  	newStudent = new student(result.name, result.gender, result.grade, result.gpa, result.detentions, result.sleepingInClass, result.catchPhrase);

  	newStudent.canStudentHaveFun();
  	newBus.removeStudent(result.Remove_This_Student);
  	newBus.studentEntersBus(newStudent);
    // aStudent = JSON.stringify(newBus.studentsOnTheBus);
    // fs.writeFile('students.txt', aStudent, function(err){

    // });
    // console.log(newStudent);
    // console.log(newBus.studentsOnTheBus);
    // console.log(aStudent);
    // console.log(newBus.studentsOnTheBus.length);
  	if (newBus.studentsOnTheBus.length >= 5) {
   		newBus.busChatter();
   	}

  	if (result.addAnotherStudent === 'yes') {
      console.log(newBus.studentsOnTheBus);
  		addStudent();
  	}

  });
};

var newBus = new bus('john', 'red', 7);

// fs.readFile('./students.txt', (err, data) => {
//   if (err) throw err;
//   newBus.studentEntersBus(JSON.parse(data));
//   // console.log(newBus.studentsOnTheBus);
// });

addStudent();
