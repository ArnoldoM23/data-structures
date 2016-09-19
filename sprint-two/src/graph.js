// Instantiate a new graph
var Graph = function(){
  this.nodes = {};
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
  this.nodes[node] = this.nodes[node] || { edges: {} };
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
  return !!this.nodes[node];
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
  if (this.contains(node)) {
    for(var key in this.nodes[node].edges){
      delete this.nodes[key].edges[node];
    }
    delete this.nodes[node];
  }
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
  if (this.nodes[fromNode] && this.nodes[toNode]) {
    var from = this.nodes[fromNode];
    var to = this.nodes[toNode];
    return from.edges[toNode] && to.edges[fromNode] ? true : false;
  }
  return false;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
  if (this.nodes[fromNode] && this.nodes[toNode]) {
    var from = this.nodes[fromNode];
    var to = this.nodes[toNode];
    from.edges[toNode] = true;
    to.edges[fromNode] = true;
  }
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
   delete this.nodes[fromNode].edges[toNode];
   delete this.nodes[toNode].edges[fromNode];
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
  for(var key in this.nodes){
    cb(key)
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

function Node (value){
  this.value = value;
  this.edgeList = [];
}








// My original solution

// // Instantiate a new graph
// var Graph = function(){
//   this.node_List = [];
//   this.edge_List =[];

// };

// // ------------------------
// // Add a node to the graph, passing in the node's value.
// Graph.prototype.addNode = function(node){
//   this.node = node;
//   this.node_List.push(this.node)
// };

// // ------------------------
// // Return a boolean value indicating if the value passed to contains is represented in the graph.
// Graph.prototype.contains = function(node){
//   return _.contains(this.node_List, node);
// };

// // ------------------------
// // Removes a node from the graph.
// Graph.prototype.removeNode = function(node){
//   for (var i = 0; i < this.node_List.length; i++) {
//     if(this.node_List[i] === node){
//       this.node_List.splice(i, 1);
//     }
//   }
// };

// // ------------------------
// // Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
// Graph.prototype.hasEdge = function(fromNode, toNode){
//   var state = false;
//   if (this.edge_List.length > 0) {
//     for (var i = 0; i < this.edge_List.length; i++) {
//         if (_.contains(this.edge_List[i], fromNode) && _.contains(this.edge_List[i], toNode)){
//           state= true;
//         }
//     }
//   } else {
//     return false
//   }
//   return state;
// };

// // ------------------------
// // Connects two nodes in a graph by adding an edge between them.
// Graph.prototype.addEdge = function(fromNode, toNode){
//   var subPair = [fromNode, toNode];
//   this.edge_List.push(subPair);
// };
// // ------------------------
// // Remove an edge between any two specified (by value) nodes.
// Graph.prototype.removeEdge = function(fromNode, toNode){
//   for (var i = 0; i < this.edge_List.length; i++) {
//     if (_.contains(this.edge_List[i], fromNode) && _.contains(this.edge_List[i], toNode)){
//       this.edge_List.splice(i, 1);  
//     }
//   }
// };

// // ------------------------
// // Pass in a callback which will be executed on each node of the graph.
// Graph.prototype.forEachNode = function(cb){
//   for (var i = 0; i < this.node_List.length; i++) {
//     cb(this.node_List[i])
//   }
// };

// /*
//  * Complexity: What is the time complexity of the above functions?
//  */



