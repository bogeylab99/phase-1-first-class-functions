function receivesAFunction(spy) {
    console.log(spy());
}
receivesAFunction("Hello", function(){return "world"});

function returnsANamedFunction(fn){
    return function name(){
        console.log();
    }
}
returnsANamedFunction();

function returnsAnAnonymousFunction(fn){
    return function(){
        console.log();
    }
}
returnsAnAnonymousFunction();