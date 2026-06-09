let p=100000;// principal amount
let r=2/100;//rate of interset 2%
let n=2; // number of times interest will be calculated per year
let t=3; // number of year
let A; //amount of Interest

A=p*(1+(r/n))**(n*t);
    
console.log("The compound interst after 3 year is:",A);
