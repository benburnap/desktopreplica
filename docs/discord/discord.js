// Discord Button 

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

// Friends Button

var friendsbutton = document.getElementById("friendsbutton");
var shoppage = document.getElementById("shoppage");
var defaultpage = document.getElementById("friendspage");
var nitropage = document.getElementById("nitropage");
var messagerequestpage = document.getElementById("messagerequestspage");
var friendssvg = document.getElementsByClassName("friendssvg");

function resetButtonStyles() {
    friendsbutton.style.backgroundColor = "rgba(0, 0, 0, 0)";
    friendsbutton.style.color = "#949ba4";
    friendssvg[1].style.fill = "#949ba4";
    friendssvg[2].style.fill = "#949ba4";
    nitrobutton.style.backgroundColor = "rgba(0, 0, 0, 0)";
    nitrobutton.style.color = "#949ba4";
    messagerequestsbutton.style.backgroundColor = "rgba(0, 0, 0, 0)";
    messagerequestsbutton.style.color = "#949ba4";
    shopbutton.style.backgroundColor = "rgba(0, 0, 0, 0)";
    shopbutton.style.color = "#949ba4";
}

friendsbutton.addEventListener('click', ()=>{
    var FriendsDisplay = window.getComputedStyle(defaultpage).display;
    console.log("The Friends Button was Clicked, Current Display: " + FriendsDisplay);

    if (FriendsDisplay === "none") {
        // Change the display of the pages
        defaultpage.style.display = "flex";
        nitropage.style.display = "none";
        shoppage.style.display = "none";
        messagerequestpage.style.display = "none";
        // Change the color of the button
        resetButtonStyles();
        friendsbutton.style.backgroundColor = "#404249";   
        friendsbutton.style.color = "#ffffff";
        friendssvg[1].style.fill = "#ffffff";
        friendssvg[2].style.fill = "#ffffff";
    }
})

// Nitro Button

var nitrobutton = document.getElementById("nitrobutton");

nitrobutton.addEventListener('click', ()=>{
    var NitroDisplay = window.getComputedStyle(nitropage).display;
    console.log("The Nitro Button was Clicked, Current Display: " + NitroDisplay);

    if (NitroDisplay === "none") {
        // Change the display of the pages
        nitropage.style.display = "flex";
        defaultpage.style.display = "none";
        shoppage.style.display = "none";
        messagerequestpage.style.display = "none";
        // Change the color of the button
        resetButtonStyles();
        nitrobutton.style.backgroundColor = "#404249";
        nitrobutton.style.color = "#ffffff";
    }
})

// Message Requests Button

var messagerequestsbutton = document.getElementById("messagerequestsbutton");

messagerequestsbutton.addEventListener('click', ()=>{
    var MessageRequestsDisplay = window.getComputedStyle(messagerequestpage).display;
    console.log("The Message Requests Button was Clicked, Current Display: " + MessageRequestsDisplay);

    if (MessageRequestsDisplay === "none") {
        // Change the display of the pages
        messagerequestpage.style.display = "flex";
        defaultpage.style.display = "none";
        nitropage.style.display = "none";
        shoppage.style.display = "none";
        // Change the color of the button
        resetButtonStyles();
        messagerequestsbutton.style.backgroundColor = "#404249";
        messagerequestsbutton.style.color = "#ffffff";
    }
})

// Shop Button

var shopbutton = document.getElementById("shopbutton");

shopbutton.addEventListener('click', ()=>{
    var ShopDisplay = window.getComputedStyle(shoppage).display;
    console.log("The Shop Button was Clicked, Current Display: " + ShopDisplay);

    if (ShopDisplay === "none") {
        // Change the display of the pages
        shoppage.style.display = "flex";
        nitropage.style.display = "none";
        defaultpage.style.display = "none";
        messagerequestpage.style.display = "none";
        // Change the color of the button
        resetButtonStyles();
        shopbutton.style.backgroundColor = "#404249";
        shopbutton.style.color = "#ffffff";
    }
})