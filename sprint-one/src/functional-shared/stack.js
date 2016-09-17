var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // create an object .
  // set counters properties and a storage property within the original object
  // extend the original object with the stactmethods object.
  // return the original object.
  var stacked = {};
  stacked.storage = {};
  stacked.counter = 0;
  // _.extend(stacked, stackMethods);
  return stacked;

};


// add original methods
var stackMethods = {};

stackMethods.push = function(value){
    this.storage[this.counter++] = value
  };
stackMethods.pop =  function(){
    this.counter--;
    if (this.counter <= 0) {
      this.counter = 0;
    };
    return this.storage[this.counter]
  };
stackMethods.size = function(){
    return this.counter
  };

var test = Stack();
console.log("testing ",test);