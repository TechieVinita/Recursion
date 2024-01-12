function fib(n){
    let a = 0;
    let b = 1;
    if(n===1 || n===2) return n-1;
    else return fib(n-1) + fib(n-2);
}

console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));
console.log(fib(7));
console.log(fib(8));