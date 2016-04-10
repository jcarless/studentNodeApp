var prompt = require('prompt');
var student = require('./student.js');
var bus = require('./bus.js');
var newStudent = '';
var addStudent = function(){
	prompt.start();
  prompt.get(['name', 'gender', 'grade', 'gpa', 'detentions', 'sleepingInClass', 'catchPhrase', 'addAnotherStudent', 'Remove_This_Student'], function (err, result) {
  	newStudent = new student(result.name, result.gender, result.grade, result.gpa, result.detentions, result.sleepingInClass, result.catchPhrase);

  	newStudent.canStudentHaveFun();
  	newBus.removeStudent(result.Remove_This_Student);
  	newBus.studentEntersBus(newStudent);

  	if (newBus.studentsOnTheBus.length >= 3) {
   		newBus.busChatter();
   	}

  	if (result.addAnotherStudent === 'yes') {
  		addStudent();
  	}

  });
};

var newBus = new bus('john', 'red', 7);
addStudent();


