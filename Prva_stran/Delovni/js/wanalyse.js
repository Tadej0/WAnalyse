function wanalyse_main() {
    $('li').each(function(i) {
        if ($(this).is('.active')) console.log(i);
    });
}
