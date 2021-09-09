let k = 1;

function Minsorting(arr) {
  
  for ( i = 0 ; i < arr.length ; i++ ) {
    for(j=0; j<arr.length; j++) {
      if (arr[j] > arr[i]) {
        let tmp = arr[j];
        arr[j] = arr[i];
        arr[i] = tmp;
      }
    }
  }
  return arr[k - 1]
}
function Maxsorting(arr) {

  for ( i = 0 ; i < arr.length ; i++ ) {
    for(j=0; j<arr.length; j++) {
      if (arr[j] < arr[i]) {
        let tmp = arr[j];
        arr[j] = arr[i];
        arr[i] = tmp;
      }
    }
  }
  return arr[k - 1]
}
let num = [2,1,6,4,8,3,10,30,200];
console.log(Minsorting(num));
console.log(Maxsorting(num))