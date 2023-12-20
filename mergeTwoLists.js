class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
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
  sorted() {
    for (let i = 0; i < this.size; i++) {
      let node = this.head;
      while (node.next && node.next.next) {
        let first = node.next;
        let second = first.next;
        if (first.value > second.value) {
          // swap
          node.next = second;
          first.next = second.next;
          second.next = first;
        }
        node = node.next;
      }
    }
  }
}

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(4);
const list2 = new LinkedList();
list2.append(1);
list2.append(3);
list2.append(4);

const mergeTwoLists = function (l1, l2) {
  let tempNode = new Node(0);
  let currentNode = tempNode;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      currentNode.next = l1;
      l1 = l1.next;
    } else {
      currentNode.next = l2;
      l2 = l2.next;
    }
    currentNode = currentNode.next;
  }
  currentNode.next = l1 || l2;

  return tempNode.next;
};

console.log(mergeTwoLists(list.head, list2.head));
