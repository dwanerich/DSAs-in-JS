class MaxBinaryHeap {
  constructor() {
    this.vals = [41,39,33,18,27,12]
  }
  insert(val){
    this.vals.push(val);
    this.bubbleUp()

  }
  bubbleUp(){
    let idx = this.vals.length - 1;
    let val = this.vals[idx]
    while(idx > 0){
      let parentIdx = Math.floor((idx - 1) /2)
      let parent = this.vals[parentIdx]
      if(val <= parent) break;
        this.vals[parentIdx] = val;
        this.vals[idx] = parent;
        idx = parentIdx;
      // console.log(parentIdx)
    }
  }
}

let heap = new MaxBinaryHeap()
heap.insert(55);
heap.insert(1);
heap.insert(45);


console.log(heap)
