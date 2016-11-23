var first_time = true;
var before_section;
var current_section;
var tmp;
var time;
var minutes;
var seconds;


function calculate_time_difference() {
    how_many_minutes = time.getMinutes() - minutes;
    how_many_seconds = time.getSeconds() - seconds;
    if (how_many_seconds < 0) {
        how_many_seconds = 60 - Math.abs(how_many_seconds);
    }
    return ((how_many_minutes * 10) + how_many_seconds);
}


function wanalyse_main() {
    $('li').each(function(i) {
        if ($(this).is('.active')) {
            tmp = i;
        }
    });

    //if the function runs the first time it is on the top of the site... meaning it has no sections before

    console.log("Section: ", tmp);
    time = new Date();


    if (first_time == true) {
        first_time = false;
        current_section = tmp;
        before_section = tmp;
        minutes = time.getMinutes();
        seconds = time.getSeconds();
    } else {
        current_section = tmp;

        if (current_section > before_section) console.log("Goind down");
        else if (current_section < before_section) console.log("Going up");



        time_spent_on_section = calculate_time_difference();

        console.log("Time spent on section: ", time_spent_on_section);

        //if the user is less then 4 seconds on an individual section it is not counted as a "section view" cuz he just passes by
        if (time_spent_on_section < 4) {
            console.log("Dont't bother, right?");
        } else {
            console.log("Wow, youre interested");
        }
        before_section = current_section;
        minutes = time.getMinutes();
        seconds = time.getSeconds();

    }

}
