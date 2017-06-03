/**
 * Created by tinhngo on 6/3/2017.
 */
function Person(name) {
    this.name = name || "unknown";
}

var person1 = new Person();
Person.prototype.kind = "unknown";
document.writeln(person1.kind + " - " + person1.name );

var person2 = new Person('Vy');
document.writeln(person2.kind);