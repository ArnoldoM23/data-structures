var Tree = function(value){
  var newTree = {};
  _.extend(newTree, treeMethods);
  newTree.value = value;
  newTree.children = [];
  newTree.parent = null;
  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  var child = Tree(value);
  child.parent = this;
  this.children.push(child);
};

treeMethods.traverse = function(target,cb){
  if (this.children.length < 1) { return false}
  var flag = false;
  function searchChildren(node, index){
    if(node.value === target){
      node.index = index;
      return flag = node;
    }
    if (cb) {node.value = cb(node.value);}
    for (var i = 0; i < node.children.length; i++) {
      searchChildren(node.children[i], i)
    }
  }
  searchChildren(this)
  return flag;
}

treeMethods.contains = function(target){
  return this.traverse(target) ? true: false;
};

treeMethods.removeFromParent = function(value){
  var foundNode = this.traverse(value);
  if (foundNode) {
    foundNode.parent.children.splice(foundNode.index, 1);
    foundNode.parent = null;
  }
}

treeMethods.map = function(cb){
  var theNewTree = Tree(cb(this.value));
  function recurse(oldTree, newTree){
    if (!oldTree.children) {
      return
    }

    for (var i = 0; i < oldTree.children.length; i++) {
      var child = oldTree.children[i];
      newTree.addChild(cb(child.value))
      recurse(child, newTree.children[i])
    }

  }
  recurse(this, theNewTree);
  return theNewTree;
}


function Node(value){
  this.value = value;
  this.children = [];
}


/*
 * Complexity: What is the time complexity of the above functions?
 */


/*
  Complexity: What is the time complexity of the above functions?
*/


// My original solution

// var Tree = function(value){
//   var newTree = {};
//   _.extend(newTree, treeMethods)
//   newTree.value = value;
//   newTree.counter = 0;
//   // your code here
//   newTree.children = {};  // fix me
//   return newTree;
// };

// var treeMethods = {};

// treeMethods.addChild = function(value){
//   this.children[this.counter++] = new Tree(value);
// };
// treeMethods.contains = function(target){
//   var state = false
//   function recur (children, target){
//     for(var key in children){
//       if (children[key].value === target) {
//         state= true; 
//       } else if (Object.keys(children[key]).length > 0){
//         recur(children[key].children, target)
//       }
//     }
//     return state;
//   }
//   return recur(this.children, target);
// };


// /*
//  * Complexity: What is the time complexity of the above functions?
//  */
