if (window.innerWidth > 1000){
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

}

function changeOSinstructions(instructionId, buttonid){

    document.getElementById("os-selection-message").style.display="none";
    document.getElementById("linux-instructions").style.display="none";
    document.getElementById("windows-instructions").style.display="none";
    document.getElementById("mac-instructions").style.display="none";
    document.getElementById(instructionId).style.display="block";

    document.getElementById('linux-button').style.borderWidth = "2px"
    document.getElementById('windows-button').style.borderWidth = "2px"
    document.getElementById('mac-button').style.borderWidth = "2px"
    document.getElementById(buttonid).style.borderWidth = "3.5px"

    document.getElementById('linux-button').style.borderColor = "rgba(255,255,255,0.33)"
    document.getElementById('windows-button').style.borderColor = "rgba(255,255,255,0.33)"
    document.getElementById('mac-button').style.borderColor = "rgba(255,255,255,0.33)"
    document.getElementById(buttonid).style.borderColor = "rgba(255,255,255,0.77)"

    document.getElementById('linux-button').style.opacity = "0.5"
    document.getElementById('windows-button').style.opacity = "0.5"
    document.getElementById('mac-button').style.opacity = "0.3"
    document.getElementById(buttonid).style.opacity = "1"

}

function copyToClipboard(event) {

    codeSnippet = event.target.previousElementSibling.textContent;

    const textArea = document.createElement('textarea');
    textArea.value = codeSnippet;

    document.body.appendChild(textArea);

    textArea.select();
    document.execCommand('copy');
    alert(`"${codeSnippet} " copied to the clipboard!`);
    document.body.removeChild(textArea);
    

}