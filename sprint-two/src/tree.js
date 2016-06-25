
var Tree = function(value){
  var newTree = {};
  _.extend(newTree, treeMethods)
  newTree.value = value;
  newTree.counter = 0;
  // your code here
  newTree.children = {};  // fix me
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  this.children[this.counter++] = new Tree(value);
};
treeMethods.contains = function(target){
  var state = false

  function recur (children, target){
    for(var key in children){
      if (children[key].value === target) {
        state= true; 
      } else if (Object.keys(children[key]).length > 0){
        recur(children[key].children, target)
      } else {
        state = false;
      }
    }
    return state;
  }
    return recur(this.children, target);
  // for(var key in this.children){
  //   if (this.children[key].value === target){
  //     return true;
  //   }else if (this.children[key][0]){
  //     for(var key in this.children[key]){
  //       if (this.children[key][0].value === target) {
  //         return true;
  //       } 
  //     }
  //   } else 
  //   {
  //     return false;
  //   }
  // }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
