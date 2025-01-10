// Date and Time Function

function updateTime() {
    const date = new Date();
  
    // Extract hours and minutes
    let hours = date.getHours();
    let minutes = date.getMinutes();
  
    // Format hours and minutes to have leading zeros if less than 10
    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
  
    // Format date to DD/MM/YYYY
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
  
    const formattedTime = `${hours}:${minutes}`;
    const formattedDate = `${day}/${month}/${year}`;
  
    document.getElementById('time-display').innerHTML = formattedTime;
    document.getElementById('date-display').innerHTML = formattedDate;
  }
  
setInterval(updateTime, 1000);
updateTime();

// Windows Button Function

var windowsbutton = document.getElementById('windowsbutton');
var windowsimage = document.getElementById('windowsbutton') && document.getElementById('windowsicon');
var windowContainer = document.getElementById('windowContainer');
var windowContent = document.querySelector('.window-content');

function toggleWindowContainer() {
    console.log("The Windows Button Was Clicked");

    var present = window.getComputedStyle(windowContainer).display;
    console.log(present);

    if  (present === 'none') {
      windowContainer.style.display = 'flex';
    }
    else {
      windowContainer.style.display = 'none';
    }
}

windowsbutton.addEventListener('click', () => {
    toggleWindowContainer();
});

window.addEventListener('click', (event) => {
    var present = window.getComputedStyle(windowContainer).display;
    console.log(present);

    if (present === 'flex' && !windowContent.contains(event.target) && event.target !== windowsbutton) {
      console.log ("The Window was Clicked")
      windowContainer.style.display = 'none';
    }
});