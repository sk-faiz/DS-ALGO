let avgArr = [-2,3,7,9];

function getMinMax(arr) {
    let min = arr[0];
    let max = arr[0];
    for (i=arr.length; i>=0; i--) {
        min > arr[i] ? min = arr[i] : min;
        max < arr[i] ? max = arr[i] : max;
    }
    return { min, max };
  }
console.log(getMinMax(avgArr));