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
  Intersection(secondList) {
    let firstNode = this.head;
    let secondNode = secondList.head;
    let set = new Set();
    while (firstNode) {
      set.add(firstNode.value);
      firstNode = firstNode.next;
      if (set.has(secondNode.value)) {
        return secondNode.value;
      } else {
        secondNode = secondNode.next;
      }
    }

    // while (firstNode.value != secondNode.value) {
    //   secondNode = secondNode.next;
    //   console.log("secondNode :", secondNode.value);
    // }
    // if (firstNode.value == secondNode.value) {
    //   return firstNode.value;
    // }
  }
  palindrome() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    // for (let i = array.length; i < 0; i--) {
    //   for (let j = 0; j < array.length; j++) {
    //     if (array[j] !== array[i]) {
    //       console.log(" :", false);
    //     }
    //   }
    // }
  }
}

const MyLinkedList = new LinkedList(1);
MyLinkedList.append(2);
MyLinkedList.append(3);
MyLinkedList.append(3);
MyLinkedList.append(1);

MyLinkedList.palindrome();
