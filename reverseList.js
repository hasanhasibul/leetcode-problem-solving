class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class linkList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size == 0;
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }

    this.size++;
  }
}

const list = new linkList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);

const reverseList = function (head) {
  let prev = null;
  let curr = head;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  head = prev;
  return head;
};
console.log(list);
console.log(reverseList(list.head));
