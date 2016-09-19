// HASHTABLE

var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.size = 0;
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this.bucketLoop(i, function(tuple){
    if (tuple[0] === k) {
      tuple[1] = v;
    }
  });
  
  var bucket = this._storage.get(i) || [];
  bucket.push([k, v]);
  this.size++;
  this._storage.set(i, bucket);

  if (this.size > this._limit * 0.75) {
    this.resize(Math.floor(this._limit * 2));
  }

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var val = null
  this.bucketLoop(i, function(tuple){
    if(tuple[0] === k){
      val = tuple[1]
      return "done";
    }
  })
  return val;
};

HashTable.prototype.remove = function(k) {
  var i = getIndexBelowMaxForKey(k, this._limit);

  this.bucketLoop(i, function(tuple, i, bucket){
    if(tuple[0] === k){
      bucket.splice(i ,1);
      this.size--;
      if (this.size < this._limit * 0.25) {
        this.resize(Math.floor(this._limit / 2));
      }
      return "done";
    }

  }.bind(this))

};

HashTable.prototype.bucketLoop = function(index, cb){
  var bucket = this._storage.get(index) || [];
  for (var i = 0; i < bucket.length; i++) {
    if(cb(bucket[i], i, bucket) === "done") { return }
  }
}


HashTable.prototype.resize = function(newLimit){
  newLimit = Math.max(newLimit, 8);
  if (this._limit === newLimit) {return}
  var prevTable = this._storage;
  this._limit = newLimit;
  this._storage = LimitedArray(newLimit);
  this.size = 0;

  prevTable.each(function(bucket) {
    if (!bucket) { return; }
    for (var i = 0; i < bucket.length; i++) {
      this.insert(bucket[i][0], bucket[i][1]);
    }
  }.bind(this));


}

/*
 * Complexity: What is the time complexity of the above functions?
 */


// First solution


// var HashTable = function(){
//   this._limit = 8;
//   this._storage = LimitedArray(this._limit);

// };

// HashTable.prototype.insert = function(k, v){
//   var i = getIndexBelowMaxForKey(k, this._limit);
//    if (this._storage[i] === undefined){
//     var bucket = []
//     bucket.push([k, v])  
//     this._storage[i] = bucket;
//    } else if (this._storage[i].length > 0){
//     this._storage[i].push([k, v])
//   }
// };

// HashTable.prototype.retrieve = function(k){
//     var i = getIndexBelowMaxForKey(k, this._limit);
//   // get value of i for key
//     var result;


//   // if storagei[0] exists, loop over sub array
//   // check for match and return if match exists

//   _.each(this._storage[i], function(val){
//     if(val[0] === k){
//       console
//       result = val[1]
//     }  
//   })
//     return result;

// };

// HashTable.prototype.remove = function(k){
//   var i = getIndexBelowMaxForKey(k, this._limit);
//   for (var j=0; j <i; j++){
//     if (this._storage[i]) {

//     }
//   }
//   this._storage[i][0][1] = null;
// };



// /*
//  * Complexity: What is the time complexity of the above functions?
//  */
