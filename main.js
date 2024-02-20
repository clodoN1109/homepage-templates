setTimeout(() => {
    // Background gradual zoom effect activation.
    document.getElementById("dynamic-background").style.scale = 2;
    // Fermi telescope figure gradual distancing effect.
    document.getElementById("telescope").style.width = "10%";
    // Telescope rotation animation programming. 
    telescope_transition_time = 3000;
    document.getElementById("telescope").style.transform = "rotate3d(0,0,1,-20deg)";
        setTimeout(() => {
            document.getElementById("telescope").style.transform = "rotate3d(0,0,1,20deg)";
        }, telescope_transition_time);
    function myCallback() {
        document.getElementById("telescope").style.transform = "rotate3d(0,0,1,-20deg)";
        setTimeout(() => {
            document.getElementById("telescope").style.transform = "rotate3d(0,0,1,20deg)";
        }, telescope_transition_time);

        console.log("test");
    }    
    const intervalID = setInterval(myCallback, 2*telescope_transition_time);

}, 500);

