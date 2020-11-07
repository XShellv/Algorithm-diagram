function Node(value) {
  this.value = value;
  this.next = null;
}

function LList() {
  this.head = new Node("head");
}

LList.prototype = {
  /**
   *
   * @param {*} item
   * 查找结点
   */
  find: function (item) {
    let curr = this.head;
    while (curr && curr.value !== item) {
      curr = curr.next;
    }
    return curr;
  },
  /**
   *
   * @param {*} newEl
   * @param {*} item
   * 插入节点
   */
  insert: function (newEl, item) {
    const itemNode = this.find(item);
    if (itemNode) {
      let newNode = new Node(newEl);
      newNode.next = itemNode.next;
      itemNode.next = newNode;
    }
  },
  /**
   *  找出目标节点的上一个节点
   */
  findPrev: function (item) {
    let prev = null;
    let current = this.head;
    while (current && current.value !== item) {
      prev = current;
      current = current.next;
    }
    return prev;
  },
  /**
   * 修改目标节点的值
   * @param {*} item
   */
  edit: function (item, newItem) {
    const itemNode = this.find(item);
    if(itemNode){
        itemNode.value = newItem
    }
  },
  /**
   * 移除结点
   */
  remove: function (item) {
    const prev = this.findPrev(item);
    if (prev) {
      const curr = prev.next;
      if (curr) {
        prev.next = curr.next;
      }
    }
  },
  /**
   * 打印所有结点
   */
  show: function () {
    let curr = this.head;
    while (curr) {
      console.log(curr.value);
      curr = curr.next;
    }
  },
};

const root = new LList();
root.insert("likek", "head");
root.insert("zhangsan", "likek");
root.insert("lisi", "zhangsan");
root.insert("wangwu", "lisi");
root.show();


root.remove("zhangsan")
root.show();

root.edit("lisi","zhangsan")
root.show();
