var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;
  var removing = 0
  var size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[counter++] = value;
    size++;
  };

  someInstance.dequeue = function(){
    var toBeRemoved = storage[removing];
    delete storage[removing];
    removing++;
    size --;
    if (size <= 0){
      size = 0;
    } 

    return toBeRemoved;
  };
  someInstance.size = function(){
    return size ;
  };

  return someInstance;
};
