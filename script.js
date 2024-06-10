let incrementButton=document.querySelector(".Increment-button");
let resetButton=document.querySelector(".reset-button");
let decrementButton=document.querySelector(".Decrement-button");
let counterCount=document.querySelector(".counter-display p");
let countedValue=0;
incrementButton.addEventListener("click",()=>{
    countedValue=counterCount.textContent;
    countedValue=parseInt(countedValue);
    countedValue++;
    console.log(countedValue);
    if(countedValue<0){
        counterCount.style.color="red";
    }
    else if(countedValue>0){
        counterCount.style.color="green";
    }
    else{
        counterCount.style.color="black";
    }
    counterCount.innerText=countedValue;

});
decrementButton.addEventListener("click",()=>{
    countedValue=counterCount.textContent;
    countedValue=parseInt(countedValue);
    countedValue--;
    console.log(countedValue);
    if(countedValue<0){
        counterCount.style.color="red";
    }
    else if(countedValue>0){
        counterCount.style.color="green";
    }
    else{
        counterCount.style.color="black";
    }
    counterCount.innerText=countedValue;
});
resetButton.addEventListener("click",()=>{
    countedValue=0;
    counterCount.style.color="black";
    counterCount.innerText=countedValue;
})