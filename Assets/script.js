var pastButtonEl = $('.row time-block past');
var presentButtonEl = $('.row time-block present');
var futureButtonEl = $('.row time-block future');



// var dateime = new Date();
// document.getElementById("currenttime").textContent = datetime
    
n = new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("currentDay").innerHTML = m + "/" + d + "/" + y;


var currentHour = dayjs().format("hA") // gets current hour

console.log(currentHour)


let allTimeBlocks = document.querySelectorAll(".time-block");
let foundPresent = false;
for (let index = 0; index < allTimeBlocks.length; index++) {
    //currentHOur 4PM
    let thisTimeBlock =  allTimeBlocks[index].id.split("-")[1];
    let myText = localStorage.getItem(thisTimeBlock)
    document.querySelector("#hour-" + thisTimeBlock + " .description").value = myText;
    console.log(thisTimeBlock, currentHour)
    if(thisTimeBlock == currentHour){
        allTimeBlocks[index].classList.add("present") 
        foundPresent = true;
    } else if(foundPresent){
        allTimeBlocks[index].classList.add("future") 

    }
}



var allSaveBtn = document.querySelectorAll(".saveBtn");

for (let index = 0; index < allSaveBtn.length; index++) {
    const element = allSaveBtn[index];
    element.addEventListener("click", function(e){
            let buttonKey = e.target.parentNode.parentNode.id.split("-")[1];
            let myText = document.querySelector("#hour-" + buttonKey + " .description").value // "hour-4PM"
            localStorage.setItem(buttonKey, myText);
    })
}
// newDate = dayjs().hour(12) // returns new dayjs object




$(function () {

    pastButtonEl.on('click', function () {

    })
   
  });