setTimeout(() => {
    // Background gradual zoom effect activation.
    document.getElementById("dynamic-background").style.scale = 2;

    // Logo rotation animation programming. 
    logo_transition_time = 3000;
    document.getElementById("logo").style.transform = "rotate3d(0,0,1,-20deg)";
        setTimeout(() => {
            document.getElementById("logo").style.transform = "rotate3d(0,0,1,20deg)";
        }, logo_transition_time);
    function myCallback() {
        document.getElementById("logo").style.transform = "rotate3d(0,0,1,-20deg)";
        setTimeout(() => {
            document.getElementById("logo").style.transform = "rotate3d(0,0,1,20deg)";
        }, logo_transition_time);

        console.log("test");
    }    
    const intervalID = setInterval(myCallback, 2*logo_transition_time);

}, 500);

