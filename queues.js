class Queue {
  constructor() {
    let collection = [];

    this.print = function () {
      console.log(collection);
    };

    this.enqueue = function (element) {
      collection.push(element);
    };

    this.dequeue = function () {
      return collection.shift();
    };

    this.front = function () {
      return collection[0];
    };

    this.size = function () {
      return collection.length;
    };

    this.isEmpty = function () {
      return collection.length === 0;
    };
  }
}

// var q = new Queue();
// q.enqueue(1);
// q.enqueue(2);
// q.enqueue(3);
// q.print();
// q.dequeue();
// q.print();
// console.log(q.front());
// q.size();
// console.log(q.isEmpty());
// q.print();

class PriorityQueue {
  constructor() {
    var collection = [];

    this.printCollection = function () {
      console.log(collection);
    };

    this.enqueue = function (element) {
      if (this.isEmpty()) {
        collection.push(element);
      } else {
        var added = false;
        for (var i = 0; i < collection.length; i++) {
          if (element[i] < collection[i][1]) {
            collection.splice(i, 0, element);
            added = true;
            break;
          }
        }

        if (!added) {
          collection.push(element);
        }
      }
    };

    this.dequeue = function () {
      var value = collection;
    };

    this.front = function () {
      return collection[0];
    };

    this.size = function () {
      return collection.length;
    };

    this.isEmpty = function () {
      return collection.length === 0;
    };
  }
}

var pq = new PriorityQueue();
pq.enqueue([1, 2]);
pq.enqueue([3, 4]);
pq.enqueue([5, 6]);
pq.printCollection();
pq.dequeue();
pq.front();
pq.printCollection();
