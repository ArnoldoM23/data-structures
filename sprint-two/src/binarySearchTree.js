var BinarySearchTree = function(value){
  this.value = value;
  this.right = null;
  this.left = null;
  this.size = 1;
};

BinarySearchTree.prototype.insert = function(value){
  this.size++;
  if (value < this.value) {
    if (this.left === null) {
      this.left = new BinarySearchTree(value);
    }else{
      this.left.insert(value);
    }
  }else if (value > this.value) {
    if (this.right === null) {
      
      this.right = new BinarySearchTree(value);
    }else{
      this.right.insert(value);
    }
  }

  if (this.isBinaryTreeBalanced() === false) {
    if (this.size >3) {
      this.rebalance();
    }
  }
  return;
}

BinarySearchTree.prototype.contains = function(value){
  if (value === this.value) {
    return true
  }

  if (value < this.value) {
    if (this.left === null) {
      return false;
    }else{
      return this.left.contains(value);
    }
  }else if (value > this.value) {
    if (this.right === null) {
      return false;
    }else{
      return this.right.contains(value);
    }
  }
}

BinarySearchTree.prototype.depthFirstLog = function(cb){
  cb(this.value)
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
}

BinarySearchTree.prototype.breadthFirstLog = function(cb){
  var tree = this;
  var queue = [tree];
  var list = []
  while (queue.length > 0){
    var currentTree = queue.shift();
    list.push(currentTree.value)

    if (currentTree.left) {
      queue.push(currentTree.left);
      cb(currentTree.left)
    }
    if (currentTree.right) {
      queue.push(currentTree.right);
      cb(currentTree.right)
    }
  }
  return list
}

BinarySearchTree.prototype.minDepth = function (node) {
  if (node === null) {
    return 0;
  }
  return 1 + Math.min(this.minDepth(node.left), this.minDepth(node.right));
}

BinarySearchTree.prototype.maxDepth = function (node) {
  if (node === null) {
    return 0;
  }
  return 1 + Math.max(this.maxDepth(node.left), this.maxDepth(node.right));
}

BinarySearchTree.prototype.isBinaryTreeBalanced = function () {
  if (this === null) {
    return false;
  }
  return   this.minDepth(this)  * 2 >= this.maxDepth(this);
}

BinarySearchTree.prototype.rebalance = function(){
  var treeList = this.breadthFirstLog(function(tree){ tree = null})
  // new root for tree.
  var mid = Math.floor(treeList.length / 2)
  this.value = treeList[mid];
  // make left and right subarrays.
  var left = treeList.slice(0, mid)
  var right = treeList.slice(mid)
  this.size = 0;
  while(right.length > 0 || left.length > 0){
    // midpoints for left and right array.
    var midLeft = Math.floor(left.length / 2);
    var midRight = Math.floor(right.length / 2);
    // left and right midpoint value for insert.
    var rightInsert = right.splice(midRight,1)[0]
    var leftInsert = left.splice(midLeft,1)[0]
    // insert new values;
    if (leftInsert) {
     this.insert(leftInsert);
    }
    if (rightInsert) {
     this.insert(rightInsert);
    }
  }
}
/*
 * Complexity: What is the time complexity of the above functions?
 */





// My original solution

// var BinarySearchTree = function(value){
//     var Node = function(value){
//       this.value = value;
//       this.right = null;
//       this.left = null;
//     };

//     var storage={};
//     storage.head = new Node(value);

//   //1st check if node head is empty
//   //if empty add 
//   //else check left/right
//   //then check to see if l/r data === null
//   //if l/r data null assign
//   //else recur

//   storage.insert = function (value){
//     var recur =function (value, node){
//       if (node === null){
//         console.log('value: ', value);
//         node = new Node (value);
//         // console.log('node: ', node);
//         return node;
//       } else if (node.value < value){
//           if (node.right === null){
//            node.right = new Node(value);
//            return node.right;
//           }
//           else {
//             recur (value, node.right);
//           }
//       } else if (node.value > value){
//         if (node.left === null){
//            node.left = new Node(value)
//            // console.log('node.left new node: ', node.left);
//            return node.left;
//         } else {
//           // console.log('node final before recur: ',node)
//           recur(value, node.left)
//         }
//       }
//     };
//     return recur(value, storage.head);
//   };

//   storage.contains = function (value){
//     var contRecur = function(value, node){
//       var state = false;
//       // console.log('node line 52', node)
//       // if the node is not null
//       if (node !== null) {
//         if (node.value !== undefined) {
//           if (node.value === value){
//             return true; 
//           } else if (node.value > value){
//             return contRecur(value, node.left)
//           } else if ( node.value < value){
//             return contRecur(value, node.right)
//           }
//         }else {
//           return false; 
//         }
//       }else {
//         return false;
//       }
//     };
//     return contRecur(value, storage.head);
//   };

//   storage.depthFirstLog = function (callback){
//     // create a recursive function that takes in a callback and a node
//       // if the node is not null 
//         // if the node value is not undefined
//           // invoke the callback passing in the value
//         // if the node right is not null
//           // invoke the recusive function passing the node and the callback
//         // if the node left is not null
//           // invoke the recursive function passing the node and the callback.
//     var depthRecur = function (callback, node){
//       if (node !== null){
//         if(node.value !== undefined){
//          callback(node.value);
//         }
//         if(node.right !== null){
//          return depthRecur(callback, node.right)
//         }
//         if(node.left !== null){
//          return depthRecur(callback, node.left)
//         }
//       }
//     }
//     return depthRecur(callback, storage.head)
//   }; 

//   return storage;
//   //"insert", "contains", and "depthFirstLog'
// };
// var test = BinarySearchTree();
// test.insert(2);
// test.insert(3);
// test.insert(7);
// test.insert(6);
// console.log("this is a test with four inserts",test)
// //console.log('BST LR: ', test.left.right.value)


// /*
//  * Complexity: What is the time complexity of the above functions?
//  */






