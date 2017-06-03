/**
 * Created by tinhngo on 6/3/2017.
 */
function showMessage() {
    for(var i = 0; i < arguments.length; i++){
        alert(arguments[i]);
    }
}

function max(a,b) {
    if(a > b) return a;
    return b;
}