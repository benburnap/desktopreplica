/* Discord Button */

var discordlogo = document.getElementById("maindiscordlogo");

discordlogo.addEventListener('click', ()=>{
    var currentColor = window.getComputedStyle(discordlogo).backgroundColor;
    console.log(currentColor)

    if (currentColor === "rgb(50, 51, 56)") {
        discordlogo.style.backgroundColor='#5865f2';
    }
    else {
        discordlogo.style.backgroundColor = "#323338"
    }

    console.log ("The Button was Clicked");
})