function smth() {
    let inputPswd = document.getElementById("hi").value;
    let correctPswd1 = "chesser";
    let correctPswd2 = "blue";
    let correctPswd3 = "8866940951";
    if (inputPswd === correctPswd1) {
        location.replace("https://drive.google.com/file/d/1ya2oZs3K18xo7kmQzTltso1P8f6sWFzz/view?usp=sharing")
    } else if (inputPswd === correctPswd2) {
        location.replace("https://drive.google.com/file/d/10WUdNC79ir-u9PyHXiRLbw7gNXbWGtJy/view?usp=sharing")
    } else if (inputPwsd === correctPwsd3) {
        location.replace("https://www.w3schools.com/js/js_if_else.asp")
    } else {
        alert("Incorrect password!");
    }
};

document.addEventListener('mousemove', function (e) {
const cave = document.querySelector('.cave');
const x = e.clientX;
const y = e.clientY;
cave.style.setProperty('--x', `${x}px`);
cave.style.setProperty('--y', `${y}px`);
cave.style.background = `radial-gradient(circle at ${x}px ${y}px, transparent 10px, rgba(0, 0, 0, 1) 100px)`;
});

       window.onload = function () {
           document.addEventListener("contextmenu", function (e) {
               e.preventDefault();
           }, false);
           document.addEventListener("keydown", function (e) {
               //document.onkeydown = function(e) {
               // "I" key
               if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
                   disabledEvent(e);
               }
               // "K" key
               if (e.ctrlKey && e.shiftKey && e.keyCode == 75) {
                   disabledEvent(e);
               }
               // "E" key
               if (e.ctrlKey && e.shiftKey && e.keyCode == 69) {
                   disabledEvent(e);
               }
               if (e.ctrlKey && e.shiftKey && e.keyCode == 67) {
                   disabledEvent(e);
               }
               // "J" key
               if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
                   disabledEvent(e);
               }
               // "S" key + macOS
               if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
                   disabledEvent(e);
               }
               // "U" key
               if (e.ctrlKey && e.keyCode == 85) {
                   disabledEvent(e);
               }
               // "F12" key
               if (event.keyCode == 123) {
                   disabledEvent(e);
               }
           }, false);
           function disabledEvent(e) {
               if (e.stopPropagation) {
                   e.stopPropagation();
               } else if (window.event) {
                   window.event.cancelBubble = true;
               }
               e.preventDefault();
               return false;
           }
       }




