//1.
for (i = 1; i <-7; i++){
    console.log(i);
}
console.log("======");

//2.
for (i=5; i<=25; i+=4){
    console.log(i);
}
console.log("======");

//3A.
const wizards=["Harry Potter", "Hermoine Granger", "Ron Weasly"];

//3B.
for (identity of wizards){
    console.log(identity);
}
console.log("=====");

//4A.
let harryPotterMovies=0;

//4B.
while (harryPotterMovies){
    console.log(harryPotterMovies);
}
console.log("++++++++++");

//4C.
console.log(harryPotterMovies);

console.log("______________");

//BONUS

//5A.
const hogwartsHouses=["Gryffinder", "Hufflepuff", "Ravenclaw", "Slytherin"];

//5B.
for(house of hogwartsHouses){
    for(houseName of house){
        console.log(houseName);
    }
}
console.log("///////////");

//6A.
const quote=["Yer", "A", "Wizard", "Harry"];

//6B.
let magic='';
for(i=o; i<quote.length; i++){
    magic +=  '${quote[i]}'  //storing and adding the values
}magic=magic.trim();  //getting rid of empty spaces at beginning and end 
console.log(magic);

//OR

// var all=[];
// for(i=0; i<quote.length; i++){
//    all = all + [i];
// }

// OR
// console.log(...quote);

// let hagrid = quote.join ('');
// console.log(hagrid);

console.log("||||||||||||||||||||");

//7.
for (let i = 1; i <=25, i++){
    if (i%3===0 && i%5===0) {
        console.log("Expecto Patronum");
    }
    else if (i%3===0){
    console.log("Expecto");
    }
    else if(i%5===0){
    console.log("Patronum");
    }
    else{
    console.log(i);
    }
};
