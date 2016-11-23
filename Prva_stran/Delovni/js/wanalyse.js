var first_time = true;

function wanalyse_main() {
    $('li').each(function(i) {
        if ($(this).is('.active')) console.log(i);
    });

    //if the function runs the first time it is on the top of the site... meaning it has no sections before

    if (first_time == true) {
        first_time = false;
    } else {
        console.log("made it");
    }
}
