function fibs(n){
    let arr = [];

    let a = 0;
    arr.push(a);
    let b = 1;
    arr.push(b);

    if( n>=1 ){
        for(let i=3; i<=n; i++){
            let c = b + a;
            arr.push(c);
            a = b;
            b = c;
        }
        return arr;
    }
}
console.log(fibs(8));

