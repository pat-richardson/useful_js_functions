//Useful functions


//adds create method to Object that uses a specified prototype object when creating new objects 
if(typeof Object.create !== 'function'){
  Object.create = function(o){
    var F = function(){};
    F.prototype = o;
    return new F();
  };
}