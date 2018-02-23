class Sorter {
  constructor() {
    this.data = new Array() // main data storage
    // default comparator
    this.comparator = function(a, b){
      if(a > b) return 1;
      if(a < b) return -1;
      if(a == b) return 0;
    }
  }

  add(element) {
    this.data.push(element);
  }

  at(index) {
    return this.data[index];
  }

  get length() {
    return this.data.length;
  }

  toArray() {
    return this.data;
  }

  sort(indices) {
    indices.sort((a, b) => (a - b));
    for(var i = 0; i < indices.length; i++){
      for(var j = 0; j < indices.length; j++){
          var indI = indices[i];
          var indJ = indices[j];
          if(this.comparator(this.at(indI), this.at(indJ)) < 0){
              var temp = this.at(indI);
              this.data[indI] = this.at(indJ);
              this.data[indJ] = temp;
          }
      }
    }
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;