var has_reached_bottom = false;
var first_time = true;
var before_section;
var current_section;
var tmp;
var time;
var minutes;
var seconds;
var miliseconds;
// Number of sections
var numberOfSections;
// Information about individual sections
var sectionArray;

var time_on_load, time_on_bottom_site, time_on_leaving;

var body, html;
var height;


function show_info() {

  //Show information to the modal
  document.getElementById("number_of_sections").innerHTML = numberOfSections;

    for (i = 0, len = numberOfSections, text = " "; i < len; i++) {
        text += sectionArray[i].sectionPassed + "<br>";
    }
      document.getElementById("demo").innerHTML = text;
}


window.addEventListener("load", function() {
    time = new Date();
    time_on_load = {
        "minutes": time.getMinutes(),
        "seconds": time.getSeconds(),
        "miliseconds": time.getMilliseconds()
    };
});

// How many sections are there???
window.addEventListener('DOMContentLoaded', function(e) {
    var count = document.querySelectorAll("#sections li").length;
    count -= 1;
    numberOfSections = count;
    console.log("Number of sections:", numberOfSections);
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

    for (i = 0; i < numberOfSections; i++) {
        console.log(i);
        sectionArray[i] = {
            timeSpentHere: 0,
            sectionVisited: 0,
            sectionPassed: 0,
            clickedDirectliHere: 0
        }
    }
});


// Every n MILISECONDS I check where you are ;
// But when you reach bottom for first time I stop.
window.setInterval(function() {
    console.log("<--  500 milisecond interval  -->");
    body = document.body;
    html = document.documentElement;
    height = Math.max(body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight);
    if (has_reached_bottom == false) {
        if ((window.pageYOffset / height) > 0.9) {
            has_reached_bottom = true;
            time = new Date();
            console.log("Na dnu!!!", window.pageYOffset / height);
            time_on_bottom_site = {
                "minutes": time.getMinutes(),
                "seconds": time.getSeconds(),
                "miliseconds": time.getMilliseconds()
            };
        }
    }
}, 500);


function calculate_time_difference() {
    // how_many_minutes = time.getMinutes() - minutes;
    // how_many_seconds = time.getSeconds() - seconds;
    // how_many_miliseconds = time.getMilliseconds() - miliseconds;
    //
    // console.log("MILISEKUNDE:", time.getMilliseconds()/1000);
    // var tmp_sekunde = time.getSeconds() - seconds;
    // if (tmp_sekunde<0){
    //   tmp_sekunde = 60+tmp_sekunde;
    // }
    //
    // console.log("SEKUNDE:", time.getSeconds() - seconds, "tmp_sekunde:", tmp_sekunde);
    // console.log("MINUTE:", (time.getMinutes()*60) - (minutes*60) );


    var time_diff = (time.getMinutes() * 60 + time.getSeconds() + time.getMilliseconds() / 1000) - (minutes * 60 + seconds + miliseconds / 1000);
    console.log("REAL DIFF: ", time_diff, "seconds");

    return ("Time on section in seconds:", time_diff);
}



// MAIN Section

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

        if (time_spent_on_section < 0.5) {
            console.log("Dont't bother, right?");
            sectionArray[current_section].sectionPassed += 1;
            console.log("Number of times passed by: ", sectionArray[current_section].sectionPassed);
            console.log("Number of times actually visited: ", sectionArray[current_section].sectionVisited);
        } else {
            console.log("Wow, you're actually interested");
            sectionArray[current_section].sectionVisited += 1;
            console.log("Number of times passed by: ", sectionArray[current_section].sectionPassed);
            console.log("Number of times actually visited: ", sectionArray[current_section].sectionVisited);
        }

        //  Outoput test:
        // for(i=0;i < numberOfSections; i++){
        //     console.log(i," ", sectionArray[i].sectionVisited);
        // }

        before_section = current_section;
        minutes = time.getMinutes();
        seconds = time.getSeconds();
        miliseconds = time.getMilliseconds();
        console.log("----------------------------------------------------->");
    }

}
