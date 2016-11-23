var first_time = true;
var before_section;
var current_section;
var tmp;
var time;
var minutes;
var seconds;

function wanalyse_main() {
    $('li').each(function(i) {
        if ($(this).is('.active')) {
            console.log(i);
            tmp = i;
        }
    });

    //if the function runs the first time it is on the top of the site... meaning it has no sections before

    console.log("TMP: ", tmp);
    time = new Date();


    if (first_time == true) {
        first_time = false;
        current_section = tmp;
        before_section = tmp;
        minutes = time.getMinutes();
        seconds = time.getSeconds();
        console.log(minutes, seconds);
    } else {
        current_section = tmp;
        if (current_section > before_section) console.log("Goind down");
        else if (current_section < before_section) console.log("Going up");
        before_section = current_section;
        console.log("getminutes", time.getMinutes());
        console.log("minutes", minutes);
        console.log("getseconds", time.getSeconds());
        console.log("seconds", seconds);
        time_spent_on_section = (time.getMinutes() - minutes) * 10 + (time.getSeconds() - seconds);
        console.log("Time spent on section: ", time_spent_on_section);
        minutes = time.getMinutes();
        seconds = time.getSeconds();
    }

}
