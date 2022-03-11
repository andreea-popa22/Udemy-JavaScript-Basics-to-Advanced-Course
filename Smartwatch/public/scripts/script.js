function black() {
    document.getElementById("myimage").src = "https://i.imgur.com/iOeUBV7.png";
}

function red() {
    document.getElementById("myimage").src = "https://i.imgur.com/PTgQlim.png";
}

function blue() {
    document.getElementById("myimage").src = "https://i.imgur.com/Mplj1YR.png";
}

function pink() {
    document.getElementById("myimage").src = "https://i.imgur.com/xSIK4M8.png";
}

function purple() {
    document.getElementById("myimage").src = "https://i.imgur.com/Zygu7I3.png";
}

function timer() {
    document.getElementById('heart').style.visibility = 'hidden';
    document.getElementById('heart-rate').style.visibility = 'hidden';
    document.getElementById('time').style.visibility = 'visible';
    
    setInterval(function(){
        function addZero(i) {
            if (i < 10) {
              i = "0" + i;
            }
            return i;
        }
    
        var d = new Date();
        document.getElementById('time').innerHTML = addZero(d.getHours()) + " : " + addZero(d.getMinutes()) + " : " + addZero(d.getSeconds());
    },0);
}

function heartbeat() {
    document.getElementById('time').style.visibility = 'hidden';
    document.getElementById('heart').style.visibility = 'visible';
    document.getElementById('heart-rate').style.visibility = 'visible';
}
