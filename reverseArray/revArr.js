let arr = [1,2,3];

const rev = (elem) => {
    let revARr = [];
   for ( i=elem.length - 1 ; i >= 0; i--) {
   revARr.push(elem[i]);
   }
   return revARr;
}

console.log(rev(arr));