var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);

};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
   if (this._storage[i] === undefined){
    var bucket = []
    bucket.push([k, v])  
    this._storage[i] = bucket;
   } else if (this._storage[i].length > 0){
    this._storage[i].push([k, v])
  }
};

HashTable.prototype.retrieve = function(k){
    var i = getIndexBelowMaxForKey(k, this._limit);
  // get value of i for key
    var result;


  // if storagei[0] exists, loop over sub array
  // check for match and return if match exists

  _.each(this._storage[i], function(val){
    if(val[0] === k){
      console
      result = val[1]
    }  
  })
    return result;

};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  for (var j=0; j <i; j++){
    if (this._storage[i]) {

    }
  }
  this._storage[i][0][1] = null;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
