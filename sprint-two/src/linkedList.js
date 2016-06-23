var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if (list.head === null) {
      this.head = Node(value);
      this.tail = this.head;
    }else {
      this.tail.next = Node(value);
      this.tail = this.tail.next
    }
  };

  list.removeHead = function(){
  };

  list.contains = function(target){
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
