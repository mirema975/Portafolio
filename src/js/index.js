function saltarA(id, tiempo) {
    var tiempo = tiempo || 500;
    $("html, body").animate({ scrollTop: $(id).offset().top }, tiempo);
}