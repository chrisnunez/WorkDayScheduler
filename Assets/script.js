// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
var today = moment();
$('#currentDay').text(today.format("MMM Do, YYYY"))

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
function colorCode(){
    var hour = moment().hours();
    // each func using jquery
    $(".time-block").each(function() {
        var currHour = parseInt($(this).attr("id"));
        // green color fot future
        if (currHour > hour) {
            $(this).addClass("future");
        // red color for present
        } else if (currHour === hour) {
            $(this).addClass("present");
        // grey color for past.
        } else {
            $(this).addClass("past");
        }
    })

}

// Step 5: WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
var saveBtn = $(".saveBtn");


saveBtn.on("click", function(){
    var time = $(this).siblings(".hour").text();
    var toDo = $(this).siblings(".toDo").val();
    
    // text saves to local storage
    localStorage.setItem(time, toDo);

});


// Step 6: WHEN I refresh the page
// THEN the saved events persist

function saveAgenda() {
    // gets hour from id
    $(".hour").each(function(){
        var currHour = $(this).text();
        var currAgenda = localStorage.getItem(currHour);

        // 
        if(currAgenda !== null) {
            $(this).siblings(".toDo").val(currAgenda)
        }
    })
}

colorCode();
saveAgenda();

