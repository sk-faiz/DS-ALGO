const i = (a,b) => {
    let arr = [];
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if(a[i] === b[j]) {
                arr.push(a[i]);
            }
        }
    }
    return arr;
}

const u = (a,b) => {
    
    const cache = {};

    a.forEach(item => cache[item] = item);
    b.forEach(item => cache[item] = item);

    return Object.keys(cache).map(key => cache[key]);
}

let num1 = [69,420,666,];
let num2 = [2,69,420];
console.log(i(num1, num2), u(num1, num2));