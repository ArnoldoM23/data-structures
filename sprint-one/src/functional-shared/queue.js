var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {};
  _.extend(someInstance, queueMethods);

  someInstance._storage = {};
  someInstance._start = 0;
  someInstance._end = 0;

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this._storage[this._end++] = value;
};

queueMethods.dequeue = function() {
  if (this._end !== this._start) {
    var result = this._storage[this._start];
    delete this._storage[this._start];
    this._start++
    return result;
  }
};

queueMethods.size = function() {
  console.log(this._end, 'start= ', this._start)
  return this._end - this._start;
};


// var Queue = function(){
//   // Hey! Rewrite in the new style. Your code will wind up looking very similar,
//   // but try not not reference your old code in writing the new style.


//  var someinstance = {};
//  someinstance.storage = {};
//  someinstance.storageSize = 0;
//  someinstance.counter = 0;
//  someinstance.removing = 0
//  _.extend(someinstance, queueMethods);
// return someinstance;

// };


// var queueMethods = {};

// queueMethods.enqueue = function(value){
//     this.storageSize++;
//   return  this.storage[this.counter++] = value;

//   };

//   queueMethods.dequeue = function(){
//     var toBeRemoved = this.storage[this.removing];
//     delete this.storage[this.removing];
//     this.removing++;
//     this.storageSize --;
//     if (this.storageSize <= 0){
//       this.storageSize = 0;
//     } 

//     return toBeRemoved;
//   };
//   queueMethods.size = function(){
//     return this.storageSize ;
//   };

