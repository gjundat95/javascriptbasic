/**
 * Created by tinhngo on 6/3/2017.
 */
var person = {
    name : "Tinh Ngo",
    age : 19,
    address : "Kinh Mon, Hai Duong",
    getName: function () {
        return "My name is " + this.name
    },
    changeName : function (name) {
        this.name = name
    }
    
};

var object1 = function () {
    var result = new Object();
    result.name = "Tinh Ngo";
    result.address = "Kinh Mon, Hai Duong";
    result.getName = function () {
        return this.name
    }
    for(var key in result){
        alert(key)
    }
};

function Animal(name, age, mass) {
    this.name = name || 'unknown';
    this.age = age || 'unknown';
    this.mass = mass || 'unknown';
    this.getInfo = function () {
      return "Name: "+this.name+" Age: "+this.age+" Mass: "+this.mass
    };
}

function Cat() {
    var _name = "unknown";
    var _mass = "unknown";

    this.getInfo = function () {
        return "Name: "+_name + " Mass: "+_mass;
    }

    Object.defineProperties(
        this,
        {
            "Name":{
                set:function (value) {
                    _name = value;
                },
                get:function(){
                    return _name;
                }
            },
            "Mass":{
                // set:function (value) {
                //     _mass = value;
                // },
                get:function () {
                    return _mass;
                }
            }
        }
    );
}

//object1()

// document.write(person["name"]);
// person.changeName('Tinh Tang');
// document.write("\n" + person["name"]);

// var dog = new Animal(null,null,'tinhs');
// document.write(dog.getInfo());


// var cat = new Cat();
// cat.Name = "Cat Home";
// cat.Mass = "4kg";

var animal = new Animal('Tinh',10,10);
document.writeln(Object.keys(animal));
console.log(Object.getOwnPropertyDescriptor(animal,"name"));

