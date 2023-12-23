// // document.getElementById("count-el").innerText =5;


// let count =0;
// console.log(count);
// let age=19;
// console.log(age);
 
// initiazilze the count 0
// function increment(){
//     console.log("the butoon was clicked");
// }

let countEl = document.getElementById("count-el");
// console.log(countEl);

let count=0;
let saveCount=0;
function increment(){
    // console.log("clicked");
    count += 1;
    countEl.innerText=count;
    // saveCount=count;
    // console.log(count);
}
// let totalEl = document.getElementById("total-count");
let saveEl = document.getElementById("prev-save");
let reset = saveEl.innerText;
// let totalText = totalEl;
let total_count=0;
// console.log(reset)
function save(){
    let previous = count + " - "
    saveEl.textContent+=previous;
    total_count += count ;
    // totalEl.innerText+= total_count;
    // totalEl =totalText.innerText;
    count =0;
    countEl.innerText=0;
    // console.log(saveCount);  
}

// let name ="ankit";
// let  greeting =" Hi, my name is ";
// let Mygreeting= greeting + " " +name;
// console.log(Mygreeting);

function remove(){
    saveEl.innerText=reset;
    // totalEl.innerText =totalText;

}


