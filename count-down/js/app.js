
var endDate = "05 Febuary 2040 12:00 AM"

document.getElementById("end-date").innerText = endDate;

var inputs = document.querySelectorAll("input");


function clock(){
    var end = new Date(endDate);
    var now = new Date();
    // console.log(end,now);

    var different = (end-now) / 1000;
    console.log(different);

    // console.log(parseInt (different /60 /60/24));
    //convert day
    var day  = parseInt(different / 60 / 60 / 24);
    if(day < 10){
        day = "0" + day;
    }
    inputs[0].value = day


    // console.log(parseInt (different  / 60 / 60 /) % 24);
    var hrs = parseInt(different / 60 / 60 ) % 24;
    if(hrs < 10){
        hrs = "0" + hrs;
    }
    inputs[1].value = hrs;

    // console.log(parseInt (different  / 60 ) % 60);
    var min = parseInt(different / 60 ) % 60;
    if(min < 10){
        min = "0" + min;
    }
    inputs[2].value = min;


    // console.log(parseInt (different )%60);
    var sec = parseInt(different)%60;
    if(sec < 10){
        sec = "0" + sec;
    }
    inputs[3].value = sec;



}

//function call use
clock()

    setInterval(
    function(){
        clock()
    },
        1000
    )









































