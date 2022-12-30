$(document).ready(function (params) {
    console.log("asd")
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    final = timezone.split('/')

    document.getElementById("calendar").src = "https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23606480&ctz="+final[0]+"%2F"+final[1]+"&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=1&showCalendars=0&showTz=1&hl=en&src=aW5hbmRvdXQwNzA3QGdtYWlsLmNvbQ&color=%238d91b9"
    
})