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
  reverse() {
    let current = this.head;
    let prev = null;
    while (current) {
      let temp = current.next;

      current.next = prev;
      prev = current;
      current = temp;
    }
    let array = [];
    while (prev) {
      array.push(prev.value);
      prev = prev.next;
    }

    console.log(array);
  }
  sort(secondList) {
    this.tail.next = secondList.head;
    this.tail = secondList.head;
    let current = this.head;
    console.log("current :", current);
    let next = current.next;

    while (current) {
      if (current.value > next.value) {
        console.log(" current.value", current.value);

        console.log("next.value", next.value);
        next.next = current;

        // next = next.next;
        console.log("next :", next);
      }
      if (current.value < next.value) {
      }
      current = current.next;
    }
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
const MyLinkedList2 = new LinkedList(1);
MyLinkedList2.append(3);
MyLinkedList2.append(5);

MyLinkedList.sort(MyLinkedList2);
console.log("MyLinkedList.print() :", MyLinkedList.print());
