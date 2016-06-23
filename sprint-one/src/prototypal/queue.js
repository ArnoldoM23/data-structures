var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  //create an object and merge the queue methods to the new object; 
  // create a property of storage and set it equal to empty object;
  // create a property named counter, set to 0;
  // create a property storagesize, set to 0;
  // create a property named remove; set to 0; 
  // return parent object;


    var queued = Object.create(queueMethods);
    queued.storage = {};
    queued.counter = 0;
    queued.storageSize = 0;
    queued.removing = 0;
    return queued;


};

//create an enqueue method;
//create a dequeue method;
//create a size method;


var queueMethods = {};
queueMethods.enqueue = function (value){
  this.storage[this.counter++] = value;
  this.storageSize++;

}
queueMethods.dequeue = function () {
  var toBeRemoved = this.storage[this.removing];
    delete this.storage[this.removing];
    this.removing++;
    this.storageSize --;
    if (this.storageSize <= 0){
      this.storageSize = 0;
    } 

    return toBeRemoved;
}

queueMethods.size = function () {
  return this.storageSize;
}





