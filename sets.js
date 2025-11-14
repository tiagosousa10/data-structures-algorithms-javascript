class mySet {
  constructor() {
    var collection = [];

    this.has = function (element) {
      return collection.indexOf(element) !== -1;
    };

    this.values = function () {
      return collection;
    };

    this.add = function (element) {
      if (!this.has(element)) {
        collection.push(element);
        return true;
      }

      return false;
    };

    this.remove = function (element) {
      if (this.has(element)) {
        var index = collection.indexOf(element);
        collection.splice(index, 1);
        return true;
      }
      false;
    };

    this.size = function () {
      return collection.length;
    };

    this.union = function (otherSet) {
      var unionSet = new mySet();
      var firstSet = this.values();
      var secondSet = otherSet.values();
      firstSet.forEach(function (e) {
        unionSet.add(e);
      });
      secondSet.forEach(function (e) {
        unionSet.add(e);
      });

      return unionSet;
    };

    this.intersection = function (otherSet) {
      var intersectionSet = new mySet();
      var firstSet = this.values();
      firstSet.forEach(function (e) {
        if (otherSet.has(e)) {
          intersectionSet.add(e);
        }
      });

      return intersectionSet;
    };

    this.difference = function (otherSet) {
      var differenceSet = new mySet();
      var firstSet = this.values();
      firstSet.forEach(function (e) {
        if (!otherSet.has(e)) {
          differenceSet.add(e);
        }
      });

      return differenceSet;
    };

    this.subset = function (otherSet) {
      var firstSet = this.values();
      return firstSet.every(function (e) {
        return otherSet.has(e);
      });
    };
  }
}

var setA = new mySet();
var setB = new mySet();
setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("e");

console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());
console.log(setB.difference(setA).values());

var setC = new mySet();
var setD = new mySet();
setC.add("a");
setD.add("b");
setD.add("c");
setD.add("a");
setD.add("e");
console.log(setD.values());
setD.remove("a");
console.log(setD.has("a"));
console.log(setD.add("d"));
