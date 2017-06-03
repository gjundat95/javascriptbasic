/**
 * Created by tinhngo on 6/3/2017.
 */

function Person(_firstName, _lastName) {
    this.firstName = _firstName || "unknown";
    this.lastName = _lastName || "unknown";
};

Person.prototype.getFullName = function () {
    return "My Name Is: "+this.firstName+" "+this.lastName;
};

function Student(firstName, lastName, className) {
    Person.call(this,firstName,lastName);
    this.className = className || "unknown";
};

// Ke thua
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

var student = new Student("Tinh","Ngo","KTPM K12B");
document.writeln(student.getFullName());
document.writeln(student instanceof Student);
document.writeln(student instanceof Person);