function LinkedList(){
  var length = 0;
  var head = null;

// this set the element of the node as the element that is passed in and the next is set as null
var Node = function(element){
  this.element = element;
  this.next = null;
}
// size of the LinkedList
this.size = function() {
  return length;
  }

this.head = function(){
  return head;
  }

// adding a node

this.add = function(element){

  var node = new Node(element)
  // empty node
  if(head === null){
    head = node;
  }
  // there is more and one element in the node
  else {
    // start at the beginning
    var currentNode = head;
  while(currentNode.next){

    currentNode = currentNode.next;
  }
// we have reached the end of the list
currentNode.next = node; 
  }
length++

}
