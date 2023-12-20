class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class linkedList {
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
      let last = this.head;
      while (last.next) {
        last = last.next;
      }
      last.next = node;
    }
    this.size++;
  }
}

const list = new linkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append(6);

const middleNode = function (head) {
  let size = 0;
  let headCopy = head;
  while (headCopy) {
    size++;
    headCopy = headCopy.next;
  }
  let mid;
  if (size % 2 == 0) {
    mid = size / 2 + 1;
  } else {
    mid = (size + 1) / 2;
  }

  let targetNode = head;
  while (mid - 1 > 0) {
    mid--;
    targetNode = targetNode.next;
  }
  return targetNode;
};

middleNode(list.head);
