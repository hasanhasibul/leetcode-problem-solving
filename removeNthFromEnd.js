class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class linkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(value) {
    const node = new ListNode(value);
    if (this.size == 0) {
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
  print() {
    if (this.size == 0) {
      console.log("Empty");
    } else {
      let list = [];
      let curr = this.head;
      while (curr) {
        list.push(curr.value);
        curr = curr.next;
      }
      console.log(list);
    }
  }

  removeNthFromEnd(n) {
    if (this.size == 1 && n == 1) {
      this.head = null;
    }
    if (this.size > 1 && this.size == n) {
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 1; i < this.size - n; i++) {
        prev = prev.next;
      }
      let removedNode = prev.next;
      prev.next = removedNode.next;
    }
    this.size--;
  }
}
const head = [1, 2, 3, 4, 5];

const list = new linkedList();

head.forEach((element) => {
  list.append(element);
});

const removeNthFromEnd = (head, n) => {
  let size = 0;
  let tempHead = head;
  while (tempHead) {
    size++;
    tempHead = tempHead.next;
  }
  let remainLength = size - n;
  if (remainLength == 0) {
    head = head.next;
    return head;
  }

  let curr = head;
  for (let i = 0; i < remainLength - 1; i++) {
    curr = curr.next;
  }
  curr.next = curr?.next?.next;
  return head;
};

removeNthFromEnd(list.head, 3);

// list.print()
