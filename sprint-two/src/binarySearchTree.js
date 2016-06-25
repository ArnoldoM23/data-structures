var BinarySearchTree = function(value){
    var Node = function(value){
      this.value = value;
      this.right = null;
      this.left = null;
    };

    var storage={};
    storage.head = new Node(value);

  //1st check if node head is empty
  //if empty add 
  //else check left/right
  //then check to see if l/r data === null
  //if l/r data null assign
  //else recur

  storage.insert = function (value){
    var recur =function (value, node){
      if (node === null){
        console.log('value: ', value);
        node = new Node (value);
        // console.log('node: ', node);
        return node;
      } else if (node.value < value){
          if (node.right === null){
           node.right = new Node(value);
           return node.right;
          }
          else {
            recur (value, node.right);
          }
      } else if (node.value > value){
        if (node.left === null){
           node.left = new Node(value)
           // console.log('node.left new node: ', node.left);
           return node.left;
        } else {
          // console.log('node final before recur: ',node)
          recur(value, node.left)
        }
      }
    };
    return recur(value, storage.head);
  };

  storage.contains = function (value){
    var contRecur = function(value, node){
      var state = false;
      // console.log('node line 52', node)
      // if the node is not null
      if (node !== null) {
        if (node.value !== undefined) {
          if (node.value === value){
            return true; 
          } else if (node.value > value){
            return contRecur(value, node.left)
          } else if ( node.value < value){
            return contRecur(value, node.right)
          }
        }else {
          return false; 
        }
      }else {
        return false;
      }
    };
    return contRecur(value, storage.head);
  };

  storage.depthFirstLog = function (callback){
  
  }; 

  return storage;
  //"insert", "contains", and "depthFirstLog'
};
var test = BinarySearchTree();
test.insert(2);
test.insert(3);
test.insert(7);
test.insert(6);
console.log("this is a test with four inserts",test)
//console.log('BST LR: ', test.left.right.value)


/*
 * Complexity: What is the time complexity of the above functions?
 */
// BinarySearchTree.prototype.insert 

// BinarySearchTree.prototype.
// BinarySearchTree.prototype.





