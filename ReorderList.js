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
    let fast = this.head;
    let slow = this.head;
    while (fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;
    }

    let prev = null;
    while (slow) {
      let temp = slow.next;
      slow.next = prev;
      prev = slow;
      slow = temp;
    }
    let half = Math.floor(this.length / 2);
    let current = this.head;
    let temp2 = prev;
    while (half && current.next.next) {
      let temp3 = current.next;
      current.next = temp2;
      console.log("current.next :", temp3.value);
      prev = prev.next;
      current = current.next;
      half--;
    }
  }
}
const MyLinkedList = new LinkedList(1);
MyLinkedList.append(2);
MyLinkedList.append(3);
MyLinkedList.append(4);
MyLinkedList.append(5);
MyLinkedList.append(6);
MyLinkedList.findmiddle();

console.log("MyLinkedList.print() :", MyLinkedList.print());
