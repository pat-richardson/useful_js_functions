//Useful functions


//adds create method to Object that uses a specified prototype object when creating new objects 
if(typeof Object.create !== 'function'){
  Object.create = function(o){
    var F = function(){};
    F.prototype = o;
    return new F();
  };
}

//create method available to all functions. No longer have to type prototype property
Function.prototype.method = function(name,func){
  if(!this.prototype[name]){
    this.prototype[name] = func;
    return this;
  }
};

//creates a closure that holds original function and arguments to curry
Function.method('curry', function() {
  var slice = Array.prototype.slice,
      args = slice.apply(arguments), 
      that = this;
  return function() {
    return that.apply(null, args.concat(slice.apply(arguments)));
  };
});


//tail recursive function for factorials 
var factorial = function factorial(i,a){
  a = a || 1;
  if (i < 2){
    return a;
  }
  return factorial(i - 1, a * i);
};