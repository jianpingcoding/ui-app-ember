// let min = minOfArray([3,6,10]); 
export function minOfArray(arr) {
  let min = Infinity;
  const QUANTUM = 32768;

  for (var i = 0, len = arr.length; i < len; i += QUANTUM) {
    var submin = Math.min.apply(null,
      arr.slice(i, Math.min(i + QUANTUM, len)));
    min = Math.min(submin, min);
  }

  return min;
}
