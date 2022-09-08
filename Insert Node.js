class List {
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
  display() {
    let array = [];
    let current = this.head;
    while (current) {
      array.push(current.value);

      current = current.next;
    }
    return array;
  }
  append(value) {
    const node = new List(value);
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }
  delete(i) {
    let pos = 0;
    let prev;
    let current = this.head;
    if (i == 0) {
      this.head = current.next;
    } else if (i == this.length - 1) {
      let current = this.head;

      while (current !== null) {
        if (pos == i - 1) {
          prev = current;
          prev.next = null;
        }
        pos++;
        current = current.next;
      }
    } else {
      while (current.next !== null) {
        if (pos == i - 1) {
          prev = current;

          prev.next = prev.next.next;
          this.length--;
        }
        pos++;
        current = current.next;
      }
    }
  }
  reverse() {
    let current = this.head;

    let prev = null;
    while (current !== null) {
      let next = current.next;

      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;
  }
  sort() {
    let cur = this.head;
    while (cur !== null) {
      cur = cur.next;
    }
  }
  // oddEvenList() {
  //   let current = this.head;
  //   console.log(" :", current);
  //   while (current.next !== null) {
  //     current.next = current.next.next;

  //     console.log(" :", current.next);
  //   }
  // }
}

const list = new LinkedList(4);

list.append(3);

list.append(2);
list.append(5);
list.append(1);

// list.reverse();

console.log("list.display(); :", list.display());

let array = [4, 3, 2, 5, 1],
  min;
for (let i = 0; i < array.length; i++) {
  if (array[i] > array[i + 1]) {
    let temp = array[i];
    array[i] = array[i + 1];
    array[i + 1] = temp;
  }
}

console.log(" :", array);
