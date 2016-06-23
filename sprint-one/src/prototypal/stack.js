var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // create the prototype object and merge the methods to the prototype object.
  // create a var storage object
  // create a counter property in the prototype object
  // return the prototype object
  var StackProto = Object.create(stackMethods);
  StackProto.storage = {};
  StackProto.counter = 0;
  return StackProto;
};


var stackMethods = {};
// add a push method
stackMethods.push = function (value){
  this.storage[this.counter++] = value;
};
// add a pop method
stackMethods.pop = function(){
  this.counter--;
  if(this.counter <= 0){
    this.counter = 0
  }
  return this.storage[this.counter];
};
// add a size method
stackMethods.size = function(){
  return this.counter;
}


