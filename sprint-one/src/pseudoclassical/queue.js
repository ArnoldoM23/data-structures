var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // add this.counter set to 0;
    this.counter = 0;
  // add this.storageSize = 0;
    this.storageSize = 0;
  // add this.storage set it to an object literal;
    this.storage = {};
  // add this.remove set it to 0;
    this.remove = 0;
};

// create a prototype method called enqueue 
Queue.prototype.enqueue = function(value){
  this.storage[this.counter++] = value;
  this.storageSize++;
}
// create a prototype method called dequeue
Queue.prototype.dequeue = function (){
  var toBeRemoved = this.storage[this.remove];
  delete this.storage[this.remove];
  this.remove++;
  this.storageSize--;
  if (this.storageSize <= 0) {
    this.storageSize = 0;
  }
  return toBeRemoved;
}
// create a prototype method called size;
Queue.prototype.size = function(){
  return this.storageSize;
}
