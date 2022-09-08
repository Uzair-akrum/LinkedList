class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;

    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  deleteNode(ref) {
   
  }

  print() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
}
const MyLinkedList = new LinkedList(1);
MyLinkedList.append(2);
MyLinkedList.append(4);
MyLinkedList.append(3);
MyLinkedList.deleteNode(2);

console.log("MyLinkedList.print() :", MyLinkedList.print());
