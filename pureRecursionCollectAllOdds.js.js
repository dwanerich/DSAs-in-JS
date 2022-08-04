let pureRecursionCollectAllOdds = (arr) => {
    
    let results = [];

    if(arr.length === 0) {
        return results;
    }

    if(arr[0] % 2 !== 0) {
        results.push(arr[0])
    }

    results = results.concat(pureRecursionCollectAllOdds(arr.slice(1)));
    return results;
}

let arr = [1,2,3,4,5]

pureRecursionCollectAllOdds(arr)