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

//memoize function to cache results for functions
Function.method('memoized', function() {
  var originalFunction = this;
  var table = {};
  var generateKey = function(args) {
    return JSON.stringify(args);
  };
  
  return function() {
    var key = generateKey(arguments);
    console.log(table);
    
    if(table[key] === undefined) {
      table[key] = originalFunction.apply(this, arguments);
    }
    return table[key];
  };
});

//track run time of scripts
var run_time = function() {
  var time = {
    start: null,
    end: null
  };  
  var log = function() {
      console.log('Run Time: ' + (time.end - time.start)/1000.0);
  };
  
  return {
    start: function() {
      time.start = new Date().getTime();
    },
    end: function() {
      time.end = new Date().getTime();
      log();
    }
  }; 
};

//tail recursive function for factorials 
var factorial = function factorial(i,a){
  a = a || 1;
  if (i < 2){
    return a;
  }
  return factorial(i - 1, a * i);
};