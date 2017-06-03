/**
 * Created by tinhngo on 6/3/2017.
 */

function OuterFunc() {

    var outerVariable = 100;
    alert("0="+outerVariable);
    function InnerFunc() {
        alert("1="+outerVariable);
        outerVariable += 9;
        alert("2="+outerVariable)
    }
    alert("3="+outerVariable);
    return InnerFunc;
}

function addMaker(x) {
    return function(y) {
        return x + y;
    }
}

// var innerFunc = new OuterFunc();
// innerFunc();

var addMaker = addMaker(5);
document.writeln(addMaker(5));