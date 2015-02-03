function howdy (){
    console.log("Edward Alonzo says hi!");
};

howdy();

var numba = function(string){
    if (string.length<7) {
        console.log("What a short little word!");
    } else if (string.length>7) {
        console.log("I'm sorry but that's too many to count.");
    } else if (string.length==7) {
        console.log("7, what a perfect choice!");
    } else{
        console.log("Something's wrong... I think I smell burning.");
    }
};

numba("7");
numba("seventy");
numba("university");

function inception(callback,value){
    callback(value);
}
inception( function logit(title) {
    console.log(title + " is fantastic movie.");
}, "Finding Nemo" );