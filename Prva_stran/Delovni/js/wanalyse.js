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
//number of images
var numberOfImages;
//Information about individual picture modals
var imageArray;
//number of videos
var numberOfVideos;
//Information about individual picture modals
var videoArray;
//number of exercises
var numberOfExercises;
//Information about individual exercise modals
var exerciseArray;

var time_on_load, time_on_bottom_site, time_on_leaving;

var body, html;
var height;

//Number of times the user went back up
var goingBackUp = 0;
// temporaray time variable set at the beggining of modal opening
var tmp_Time_begin;


function sectionClicked(clicked) {
    sectionArray[clicked].clickedDirectliHere += 1;
}

function imgModalClicked(clicked) {
    imageArray[clicked].numberOfTimesClicked += 1;
}

function videoModalClicked(clicked) {
    videoArray[clicked].numberOfTimesClicked += 1;
}
function exerciseModalClicked(clicked) {
    exerciseArray[clicked].numberOfTimesClicked += 1;
}

function startTime(type, number) {
    time = new Date();
    tmp_Time_begin = {
        "hours": time.getHours(),
        "minutes": time.getMinutes(),
        "seconds": time.getSeconds(),
        "miliseconds": time.getMilliseconds()
    };
}

function stopTime(type, number) {
    time = new Date();
    var time_diff = (time.getHours() * 3600 + time.getMinutes() * 60 + time.getSeconds() + time.getMilliseconds() / 1000) - (tmp_Time_begin.hours * 3600 + tmp_Time_begin.minutes * 60 + tmp_Time_begin.seconds + tmp_Time_begin.miliseconds / 1000);
    switch (type) {
        case 'image':
            imageArray[number].timeSpentHere += time_diff;
            break;
        case 'video':
            videoArray[number].timeSpentHere += time_diff;
            break;
        case 'exercise':
            exerciseArray[number].timeSpentHere += time_diff;
            break;
        default:
            console.log("ITS A NOTHING");

    }
}

function show_info() {
    //Show information to the modal
    document.getElementById("number_of_sections").innerHTML = numberOfSections;
    document.getElementById("number_of_images").innerHTML = numberOfImages;
    document.getElementById("number_of_videos").innerHTML = numberOfVideos;
    document.getElementById("number_of_exercise_modals").innerHTML = numberOfExercises;
    document.getElementById("number_of_going_back_up").innerHTML = goingBackUp;
    document.getElementById("time_visited_site").innerHTML = time_on_load.minutes + "minute " + time_on_load.seconds + "seconds " + time_on_load.miliseconds + "miliseconds";
    document.getElementById("time_reached_bottom").innerHTML = time_on_bottom_site.minutes + "minute " + time_on_bottom_site.seconds + "seconds " + time_on_bottom_site.miliseconds + "miliseconds";


    for (i = 0, len = numberOfImages, text = ""; i < len; i++) {
        text += "<hr style='padding-top:20px; '><h1 style='text-align:center;'>Image " + (i + 1) + ": </h1>" + "<br><p style='line-height:8px; margin:0px 0px 0px 0px ;'>Times viewed:" + imageArray[i].numberOfTimesClicked + "</p><br><p style='line-height:8px; margin:0px 0px 0px 0px ;'>Time viewed:" + imageArray[i].timeSpentHere + "</p><br>";
    }
    document.getElementById("demo2").innerHTML = text;

    for (i = 0, len = numberOfVideos, text = ""; i < len; i++) {
        text += "<hr style='padding-top:20px; '><h1 style='text-align:center;'>Video " + (i + 1) + ": </h1>" + "<br><p style='line-height:8px; margin:0px 0px 0px 0px ;'>Times viewed:" + videoArray[i].numberOfTimesClicked + "</p><br><p style='line-height:8px; margin:0px 0px 0px 0px ;'>Time viewed:" + videoArray[i].timeSpentHere + "</p><br>";
    }
    document.getElementById("demo3").innerHTML = text;

    for (i = 0, len = numberOfSections, text = ""; i < len; i++) {
        text += "<hr style='padding-top:20px; '><h1 style='text-align:center;'>Section " + (i + 1) + ": </h1>" + "<br><p style='line-height:8px; margin:0px 0px 0px 0px ;'>Times passed:" + sectionArray[i].sectionPassed + "</p><br><p style='line-height:8px; margin:0px 0px 0px 0px ;'>Times viewed:" + sectionArray[i].sectionVisited + "</p><br><p style='line-height:8px; margin:0px 0px 0px 0px ;'>Total time viewed:" + sectionArray[i].timeSpentHere + "</p><br><p style='line-height:8px; margin:0px 0px 70px 0px ;'>Clicked directly: " + sectionArray[i].clickedDirectliHere + "</p>";
    }
    document.getElementById("demo1").innerHTML = text;

}
// +": </h1>" + "<br><p>Times passed: </p>" + sectionArray[i].sectionPassed +"</p><br><p>Times viewed: </p>"+sectionArray[i].sectionPassed+"br<p>Total time viewed: </p>"+ sectionArray[i].timeSpentHere+"br<p>clicked directly: </p>"+sectionArray[i].clickedDirectliHere;



window.addEventListener("load", function() {
    time = new Date();
    time_on_load = {
        "minutes": time.getMinutes(),
        "seconds": time.getSeconds(),
        "miliseconds": time.getMilliseconds()
    };
});


// How many modals with IMAGES are there???
window.addEventListener('DOMContentLoaded', function(e) {
    var count = document.querySelectorAll("#img_Modal").length;
    numberOfImages = count;
    console.log("Number of IMAGES:", numberOfImages);
    imageArray = new Array(numberOfImages);

    /*
      Varibles that are to be gathered:
      numberOfTimesClicked -> how many times was the picture looked at?
      timeSpentHere        -> how long was the picture looked at?
    */
    for (i = 0; i < numberOfImages; i++) {
        imageArray[i] = {
            numberOfTimesClicked: 0,
            timeSpentHere: 0
        }
    }

});

// How many modals with VIDEOS are there???
window.addEventListener('DOMContentLoaded', function(e) {
    var count = document.querySelectorAll("#video_Modal").length;
    numberOfVideos = count;
    videoArray = new Array(numberOfVideos);

    /*
      Varibles that are to be gathered:
      numberOfTimesClicked -> how many times was the picture looked at?
      timeSpentHere        -> how long was the picture looked at?
    */
    for (i = 0; i < numberOfVideos; i++) {
        videoArray[i] = {
            numberOfTimesClicked: 0,
            timeSpentHere: 0
        }
    }

});

// How many modals with EXERCISES are there???
window.addEventListener('DOMContentLoaded', function(e) {
    var count = document.querySelectorAll("#exercise_Modal").length;
    numberOfExercises = count;
    exerciseArray = new Array(numberOfExercises);

    /*
      Varibles that are to be gathered:
      numberOfTimesClicked -> how many times was the picture looked at?
      timeSpentHere        -> how long was the picture looked at?
    */
    for (i = 0; i < numberOfExercises; i++) {
        exerciseArray[i] = {
            numberOfTimesClicked: 0,
            timeSpentHere: 0
        }
    }

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
            timeSpentPassign: 0,
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
    var time_diff = (time.getMinutes() * 60 + time.getSeconds() + time.getMilliseconds() / 1000) - (minutes * 60 + seconds + miliseconds / 1000);
    console.log("REAL DIFF: ", time_diff, "seconds");

    return ("Time on section in seconds:", time_diff);
}



// MAIN Section

function wanalyse_main() {
    console.log("ACTIVATED!!!");
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
        else if (current_section < before_section) {
            goingBackUp += 1;
            console.log("Going up");
        }
        time_spent_on_section = calculate_time_difference();

        console.log("Time spent on section: ", time_spent_on_section);

        //if the user is less then 2 seconds on an individual section it is not counted as a "section view" cuz he just passes by

        if (time_spent_on_section < 0.5) {
            console.log("Dont't bother, right?");
            sectionArray[before_section].sectionPassed += 1;
            sectionArray[before_section].timeSpentPassign += time_spent_on_section;
        } else {
            console.log("Wow, you're actually interested");
            sectionArray[before_section].sectionVisited += 1;
            sectionArray[before_section].timeSpentHere += time_spent_on_section;
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
