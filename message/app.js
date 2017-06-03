/**
 * Created by tinhngo on 6/3/2017.
 */
var alertTest = function () {
    alert('alo moto...');
    alert(1);
    alert(true);
}

var confirmTest = function () {
    var result = confirm('are you delete item ?');
    if(result == true){
        alert('user accepted');
    }else {
        alert('user not accepted');
    }
}

var promptTest = function () {
    var result = prompt('enter username: ','tinhngo');
    if(result != null){
        alert("My name is "+result)
    }
}

promptTest()