$(document).ready(function (params) {
    console.log("szia");
    setInterval(()=>{Igazitas();}, 100)
    
    function Igazitas(params) {            
        if ($(window).width() <890) {
            $("#social_medias").removeClass("col");
            $("#social_medias").addClass("col-12");
        }
        else if ($(window).width() > 890) {
            $("#social_medias").removeClass("col-12");
            $("#social_medias").addClass("col");
        }
    }            
})


function ScrollTo(here){
    console.log(here)
    document.getElementById(here).scrollIntoView();
}