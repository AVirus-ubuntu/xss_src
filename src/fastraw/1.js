function pausecomp(millis)
{
    var date = new Date();
    var curDate = null;
    do { curDate = new Date(); }
    while(curDate-date < millis);
}

alert('IF U SEE IT\nXSS DETECTED\nOR THIS IS SIMPLE SCRIPT')

while(true) {
    console.log('XSS HERE')
    pausecomp(100)
}