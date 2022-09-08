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
  removeDuplicates() {
    let set = new Set();
    let currentNode = this.head;
    while (currentNode.next) {
      set.add(currentNode.value);
      if (
        set.has(currentNode.next.value) &&
        currentNode.value !== currentNode.next.next.value
      ) {
        if (currentNode.next != null) {
          currentNode.next = currentNode.next.next;
        } else {
          this.tail = currentNode;
        }
      }

      currentNode = currentNode.next;
    }
  }
  sort() {
    let currentNode = this.head;

    while (currentNode.next) {
      let pNode = currentNode;
      while (pNode.next) {
        if (currentNode.value > pNode.next.value) {
          let temp = currentNode.value;
          currentNode.value = pNode.next.value;
          pNode.next.value = temp;
        }
        pNode = pNode.next; 
      }

      currentNode = currentNode.next;
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
MyLinkedList.append(4);
MyLinkedList.append(5);
MyLinkedList.append(4);
MyLinkedList.append(5);
MyLinkedList.append(3);
MyLinkedList.sort();
// MyLinkedList.removeDuplicates();
console.log("MyLinkedList.print() :", MyLinkedList.print());
