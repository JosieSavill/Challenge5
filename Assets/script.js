var pastButtonEl = $('.row time-block past');
var presentButtonEl = $('.row time-block present');
var futureButtonEl = $('.row time-block future');

// adding current date, time to header

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

/*
console.log(currentHour);
function buildScheduler() {
    for (let index = 9; index <= 18; index++) {
        var timeRow = $("<div>");
        timeRow.addClass("row time-block").attr('id', index);
        var hourContainer = $("<div>");
        hourContainer.addClass('col-1 hour').text(index + ':00')
        var textArea = $("<textarea>");
        textArea.addClass('col-10 description')
        var saveBtn = $("<button>")
        saveBtn.addClass("col-1 saveBtn").html('<i class="fas fa-save"></i>')
        timeRow.append(hourContainer).append(textArea).append(saveBtn)
        
        $('.container-lg').append(timeRow)
        

    }
    
}
buildScheduler()
*/

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

    pastButtonEl.on('click', function () {

    })
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });