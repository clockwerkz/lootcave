const memoize = (fn) => {
    let cache = {};
    return (...args) => {
      if (args in cache) {
        //console.log('Fetching from cache');
        return cache[args];
      } else {
        //console.log("Calculating Result");
        let result = fn.apply(this, args);
        cache[args] = result;
        return result;
      }
    }
  }

  const largestCollection = memoize(
    arr => {
      if (arr.length === 0) return [];
      let withNumber = [arr[0]].concat(largestCollection(arr.slice(2)));
      let withoutNumber = [...largestCollection(arr.slice(1))];
      return  withNumber.reduce((acc,el)=> acc+=el, 0) > withoutNumber.reduce((acc,el)=> acc+=el, 0) ? withNumber : withoutNumber;
    }
  )

  export default largestCollection;