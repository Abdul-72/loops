// loops 
// for loop
// for (initializatiom;condition;increment/decrementopreator) {

// }

for ( let i=1;  i<11; i++) {
    console.log(i);
}
for (let i=1; i<=10;i++) {
    console.log( 19*i);
}



// NESTED LOOPING (it works as matrix 11,12,13......) 

// for (let i=1; i<4 ; i++) {
//     for (let j=1; j<=3;j++){
//         console.log(i,j)
//     }
// }



// WHILE LOOP   

// its same as the for loop but we can initialize value of i before the loop and even we can write the increment and decrement operators outside f the loop

// let i=0
// while(i<5) {
//     i++;
//     console.log(i);
// }



//  DO WHILE LOOP 
//  in do while loop first we have to initialize the value than open do loop then print i 
// then enter increment and decremnt operator close loop and open while loop and write the condition 


let i = 1
do {
    console.log(i);
    i++
}while (i<5)