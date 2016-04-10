var bus = function(driverName, color, gas){
	this.studentsOnTheBus = [];
	this.driverName = driverName;
	this.color = color;
	this.gas = parseInt(gas);
	this.studentEntersBus = function(student){
		this.studentsOnTheBus.push(student);
		console.log('student enters');
		console.log(this.studentsOnTheBus);
	};
	this.busChatter = function(){
		for (var i = 0; i < this.studentsOnTheBus.length; i++) {
			if (this.studentsOnTheBus[i].fun == true) {
				console.log(this.studentsOnTheBus[i].catchPhrase);
			}
		};
	};
	this.removeStudent = function(student){
		for (var i = 0; i < this.studentsOnTheBus.length; i++) {
			if (student == this.studentsOnTheBus[i].name) {
			console.log(this.studentsOnTheBus[i].name + ' was removed');
			this.studentsOnTheBus.splice(i, 1);
			
			}else{
				console.log('no students removed');
			};
		};
	}
};

module.exports = bus;

  