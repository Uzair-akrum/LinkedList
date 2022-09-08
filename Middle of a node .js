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
  print() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  findmiddle() {
    let currentNode = this.head;
    let half = Math.abs(this.length / 2);
    half = Math.abs(half);
 
    let i = 0;
    while (currentNode) {
      if (i == half) {
         this.head = currentNode;
      }
      currentNode = currentNode.next;
      i++;
    }
  }
}
const MyLinkedList = new LinkedList(1);
MyLinkedList.append(2);
MyLinkedList.append(3);
MyLinkedList.append(4);
MyLinkedList.append(5);

MyLinkedList.findmiddle();
console.log("MyLinkedList.print() :", MyLinkedList.print());
