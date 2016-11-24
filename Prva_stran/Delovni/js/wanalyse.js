var first_time = true;
var before_section;
var current_section;
var tmp;
var time;
var minutes;
var seconds;
var miliseconds;
var numberOfSections;
var sectionArray;

// How many sections are there???
window.addEventListener('DOMContentLoaded', function(e) {
    var count = document.querySelectorAll("#sections li").length;
    count -= 1;
    numberOfSections = count;
    console.log("Number of sections:", numberOfSections );
    // Because that is how big the array has to be
    // The array includes information about the events happening in the individual sections
    sectionArray = new Array(numberOfSections);
	
	/*
		Variables that are to be gathered:
		timeSpentHere  		->	time spent looking at this section
		sectionVisited 		->	number of times this section has been viewed
		sectionPassed		->	number of times this section was just passed by [passing by defined by minimal time required to count as a visit]
		clickedDirectliHere ->	number of times this section has been clicked directly in the menu, NO scrolling
	*/
	
    for (i = 0; i < numberOfSections  ; i++){
      console.log(i);
	  sectionArray[i]={timeSpentHere:0, sectionVisited:0, sectionPassed:0, clickedDirectliHere:0}
    }
} );



function calculate_time_difference() {
    how_many_minutes = time.getMinutes() - minutes;
    how_many_seconds = time.getSeconds() - seconds;
    how_many_miliseconds = time.getMilliseconds() - miliseconds;

    if (how_many_minutes < 0) {
        how_many_minutes = 60 - Math.abs(how_many_minutes);
    }
    if (how_many_seconds < 0) {
        how_many_seconds = 60 - Math.abs(how_many_seconds);
    }

    if (how_many_miliseconds < 0) {
        how_many_miliseconds = 1000 - Math.abs(how_many_miliseconds);
    }

    return ("how many minutes and seconds:",( how_many_minutes + (how_many_seconds/10) + (how_many_miliseconds/1000) ) );
}


function wanalyse_main() {
    $('li').each(function(i) {
        if ($(this).is('.active')) {
            tmp = i;
        }
    });

    //if it runs the first time something has to change
	
    console.log("Section: ", tmp);
    time = new Date();

    if (first_time == true) {
        first_time = false;
        current_section = tmp;
        before_section = tmp;
        minutes = time.getMinutes();
        seconds = time.getSeconds();
        miliseconds = time.getMilliseconds();
    } else {
        current_section = tmp;
        if (current_section > before_section) console.log("Going down");
        else if (current_section < before_section) console.log("Going up");

        time_spent_on_section = calculate_time_difference();

        console.log("Time spent on section: ", time_spent_on_section);

        //if the user is less then 2 seconds on an individual section it is not counted as a "section view" cuz he just passes by
		
        if (time_spent_on_section < 2) {
            console.log("Dont't bother, right?");
        } else {
            console.log("Wow, you're actually interested");
        }
        before_section = current_section;
        minutes = time.getMinutes();
        seconds = time.getSeconds();
        console.log("----------------------------------------------------->");
    }

}
