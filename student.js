var student = function(name, gender, grade, gpa, detentions, sleepingInClass, catchPhrase){
	this.name = name;
	this.gender = gender;
	this.grade = grade;
	this.gpa = gpa;
	this.detentions = detentions;
	this.sleepingInClass = sleepingInClass;
	this.catchPhrase = catchPhrase;
	this.fun = true;
	this.canStudentHaveFun = function(){
		if (this.detentions < 10 && this.gpa > 2) {
			console.log('Student can have fun');
			this.fun = true;
		}else{
			console.log('student cannot have fun');
			this.fun = false;
		}
	};
	
}

 module.exports = student;





  