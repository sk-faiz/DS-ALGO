function Maxsorting(arr) {

for ( i = 0 ; i < arr.length ; i++ ) {
for(j=0; j<arr.length; j++) {
      if (arr[j] > arr[i]) {
        let tmp = arr[j];
        arr[j] = arr[i];
        arr[i] = tmp;
      }
    }
  }
  return arr
 }
let num1 = [2,9,7,-3,-9];

console.log(Maxsorting(num1));