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
  let num = [2,0,1,2,1,0];
  console.log(Maxsorting(num));