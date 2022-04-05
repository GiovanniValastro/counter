// title of the project 

let title = document.createElement("div");
let testo = document.createTextNode("Counter");
title.className = ("container title");
title.appendChild(testo);
document.body.appendChild(title);


// container of the counter 

let container = document.createElement("div");
container.classList = ("container box_counter");
document.body.appendChild(container);


// display of the counter

let display = document.createElement("div");
let numb = document.createTextNode("0");
display.classList = ("numb");
display.appendChild(numb);
container.appendChild(display);


// container of the button

let btn = document.createElement("div");
btn.classList = ("btn");
container.appendChild(btn);


// button for subtraction 

let decrement = document.createElement("button");
let minus = document.createTextNode("-");
decrement.classList = ("decrement");
decrement.appendChild(minus);
btn.appendChild(decrement);


// button for addition

let increment = document.createElement("button");
let plus = document.createTextNode("+");
increment.classList = ("increment");
increment.appendChild(plus);
btn.appendChild(increment);


// button for reset

let reset = document.createElement("button");
reset.classList = ("reset");
btn.appendChild(reset);


// button to save the numbers

let save = document.createElement("button");
save.classList = ("save");
btn.appendChild(save);


// message if the slots are full 

let alr = document.createElement("div");
document.body.appendChild(alr); 
alr.classList = ("alr");
let message = document.createTextNode("Filled slots");


// container of saved numbers

let box_saved_numb = document.createElement("div");
box_saved_numb.classList = ("container box_saved_numb");
document.body.appendChild(box_saved_numb);


// slot of saved numbers

let arr_saved_numb = [];
let saved_numb;

for(i=0;  i < 20; i++){
    saved_numb = document.createElement("div");
    saved_numb.classList = ("saved_numb");
    box_saved_numb.appendChild(saved_numb);
    arr_saved_numb.push(saved_numb);
}


counter = 0;

decrement.addEventListener("click", function(){
    counter--;
    numb.textContent = counter;
})

increment.addEventListener("click", function(){
    counter++;
    numb.textContent = counter;
})

reset.addEventListener("click", function (){
    counter = 0;
    numb.textContent = counter;
})


let index = 0;    


save.addEventListener("click", function(){

    if(index <= 19){   
        arr_saved_numb[index].textContent = counter;
        index++;    
     
    }else{
        alr.classList.add("active");
        alr.appendChild(message), 
        setTimeout(() => alr.classList.remove("active"),4000);
        setTimeout(() => alr.removeChild(message),4000);
    }
 
})


