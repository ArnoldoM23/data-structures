var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if (!list.head) {
      list.head = Node(value);
      list.tail = list.head;
    }else{
      list.tail.next = Node(value);
      list.tail = list.tail.next; 
    }
  console.log(list)
  };

  list.removeHead = function(){
    if (list.head !== null) {
      var chopHead = list.head.value;
      list.head = list.head.next;
      return chopHead;
    }
    return null;
  };

  list.contains = function(target){
    if (!list.head) { return false; }
    // using a while loop
    // var current = list.head;
    // while(current){
    //   if (current.value === target) {
    //     return true;
    //   }
    //   current = current.next;
    // }
    // return false;

    // recursively
    return (function recurse(node) {
      if (!node) { return false}
      if (node.value === target) {
        return true;
      }
      return recurse(node.next)
    })(list.head);
  };
  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};


// Double linked list

// var LinkedList = function(){
//   var list = {};
//   list.head = null;
//   list.tail = null;

//   list.addToTail = function(value){
//     var node = new Node(value);
//     console.log()
//     if (!list.head) {
//       list.head = node;
//       list.tail = list.head;
//     }else{
//       list.tail.next = node;
//       node.previous = list.tail;
//       list.tail = list.tail.next; 
//     }
//   };

//   list.removeHead = function(){
//     if (list.head !== null) {
//       var chopHead = list.head.value;
//       list.head = list.head.next;
//       list.head.previous = null;
//       return chopHead;
//     }
//     return null;
//   };

//   list.removeNode = function(target){
//     if (list.head !== null) {
//       var current = list.head;

//       if (list.head.value === target) {
//         list.removeHead();
//       }else{
//         while(current){
//           if (current.value === target) {
//             var deletedNode = current;
//             current.previous.next = current.next;
//             current.next.previous = current.previous;
//             // console.log('deletedNode', deletedNode)
//             return deletedNode;
//           }
//           current = current.next;
//         }  
//       }
//     }
//   }

//   list.addToHead = function(value){
//     var newHead = new Node(value);
//     var currentHead = list.head
//     if (currentHead) {
//       newHead.next = currentHead;
//       currentHead.previous = newHead;
//       list.head = newHead;
//     }
//   }

//   list.removeTail = function(){
//     if (list.head) {
//       var currentTail = list.tail;
//       list.tail = currentTail.previous;
//       list.tail.next = null;
//       list.tail.previous = currentTail.previous.previous;
//     }

//   }

//   list.contains = function(target){
//     if (!list.head) { return false; }
//     // using a while loop
//     // var current = list.head;
//     // while(current){
//     //   if (current.value === target) {
//     //     return true;
//     //   }
//     //   current = current.next;
//     // }
//     // return false;

//     // recursively
//     return (function recurse(node) {
//       if (!node) { return false}
//       if (node.value === target) {
//         return true;
//       }
//       return recurse(node.next)
//     })(list.head);
//   };

//   return list;
// };

// function Node(value){
//   this.value = value;
//   this.next = null;
//   this.previous = null;
// };


// my original solution haha

// var LinkedList = function(){
//   var list = {};
//   list.head = null;
//   list.tail = null;

//   list.addToTail = function(value){
//     if (list.head === null) {
//       this.head = Node(value);
//       this.tail = this.head;
//     }else {
//       this.tail.next = Node(value);
//       this.tail = this.tail.next
//     }
//   };

//   list.removeHead = function (){
// //if check to see if head is not null; -->  remove the head
// //then point the head to the tail.
// //tail.next will to head.next
//   var current = this.head;
//   var previous = this.head.value
//   if (this.head !== null){
//    this.head = this.tail;
//   }
//  return previous;
//   };

//   list.contains = function(target){
//     if (this.head.value === target){
//       return true;
//     } else if (this.tail.value === target){
//       return true;
//     } else {
//       return false
//     } 
//   };

//   return list;
// };

// var Node = function(value){
//   var node = {};

//   node.value = value;
//   node.next = null;

//   return node;
// };

// /*
//  * Complexity: What is the time complexity of the above functions?

//  */
