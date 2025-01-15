// Date and Time Function

function getMonthName(monthNumber) {
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    return monthNames[monthNumber];
}

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
    const monthName = getMonthName(date.getMonth());
    const year = date.getFullYear();
  
    const formattedTime = `${hours}:${minutes}`;
    const formattedDate = `${day}/${month}/${year}`;
    const formattedTitleDate = `${day} ${monthName} ${year}`;
  
    document.getElementById('time-display').innerHTML = formattedTime;
    document.getElementById('date-display').innerHTML = formattedDate;
    //document.getElementbyId('time-container').setAttribute('data-title', formattedTitleDate);
}
  
setInterval(updateTime, 1000);
updateTime();

// Windows Button Function

// Main Container

var windowsbutton = document.getElementById('windowsbutton');
var windowsimage = document.getElementById('windowsicon');
var windowContainer = document.getElementById('windowContainer');
var windowContent = document.querySelector('.window-content');

// Content Animations

var windowssidebar = document.getElementById("windowssidebar");
var windowsscrollbar = document.getElementById("windowsscrollbar")
var windowsright = document.getElementById("windowsrightside")

function toggleWindowContainer() {
    console.log("The Windows Button Was Clicked");

    var present = window.getComputedStyle(windowContainer).display;
    var transform = window.getComputedStyle(windowContent).transform;
    console.log(present);
    console.log(transform);

    if  (present === 'none') {
      windowContainer.style.display = 'flex';
      setTimeout(() => {
      windowContent.style.transform = 'translateY(0px)'
      windowssidebar.style.transform = 'translateY(0px)'
      windowsscrollbar.style.transform = 'translateY(0px)'
      windowsright.style.transform = 'translateY(0px)'
      }, 1);
    }
    else {
      windowContainer.style.display = 'none';
      windowContent.style.transform = 'translateY(20px)';
      windowssidebar.style.transform = 'translateY(10px)'
      windowsscrollbar.style.transform = 'translateY(20px)'
      windowsright.style.transform = 'translateY(20px)'
    }
}

windowsbutton.addEventListener('click', () => {
    toggleWindowContainer();
});

windowsimage.addEventListener('click', () => {
    toggleWindowContainer();
});

window.addEventListener('click', (event) => {
    var present = window.getComputedStyle(windowContainer).display;

    if (present === 'flex' && !windowContent.contains(event.target) && event.target !== windowsbutton && event.target !== notificationCentreButton && event.target !== hiddeniconsbutton) {
      console.log ("The Window was Clicked")
      windowContainer.style.display = 'none';
      windowContent.style.transform = 'translateY(20px)';
      windowssidebar.style.transform = 'translateY(10px)'
      windowsscrollbar.style.transform = 'translateY(20px)'
      windowsright.style.transform = 'translateY(20px)'
    }
});

// Hidden Icons Button

var hiddeniconsContainer = document.getElementById('hiddeniconsContainer');
var hiddeniconsContent = document.getElementById('hiddenicons-content');
var hiddeniconsbutton = document.getElementById('hiddenicons');

function toggleHiddenIcons() {
    console.log("The Hidden Icons Button Was Clicked");

    var present = window.getComputedStyle(hiddeniconsContainer).display;

    if (present === 'none') {
      hiddeniconsContainer.style.display = 'flex';
    }
    else {
      hiddeniconsContainer.style.display = 'none';
    }
}

hiddeniconsbutton.addEventListener('click', () => {
    toggleHiddenIcons();
});

window.addEventListener('click', (event) => {
  var present = window.getComputedStyle(hiddeniconsContainer).display;

  if (present === 'flex' && !hiddeniconsContent.contains(event.target) && event.target !== hiddeniconsbutton) {
    console.log ("The Window was Clicked")
    hiddeniconsContainer.style.display = 'none';
  }
});

// Notification Centre Button

var notificationCentreContainer = document.getElementById('notificationcentreContainer');
var notificationCentreContent = document.getElementById('notificationcentre-content');
var notificationCentreButton = document.getElementById('notificationcentre');

function toggleNotificationCentre() { 
    console.log("The Notification Centre Button Was Clicked");

    var present = window.getComputedStyle(notificationCentreContainer).display;

    if (present === 'none') {
      notificationCentreContainer.style.display = 'flex';
      setTimeout(() => {
        notificationCentreContent.style.transform = 'translateX(0px)'
      }, 1);
    }
    else {
      setTimeout(() => {
        notificationCentreContent.style.transform = 'translateX(400px)'
      }, 1);
      setTimeout(() => {
        notificationCentreContainer.style.display = 'none';
      }, 200);
    }
}

notificationCentreButton.addEventListener('click', () => {
    toggleNotificationCentre();
});

window.addEventListener('click', (event) => {
  var present = window.getComputedStyle(notificationCentreContainer).display;

  if (present === 'flex' && !notificationCentreContent.contains(event.target) && event.target !== notificationCentreButton) {
    console.log ("The Window was Clicked")
    setTimeout(() => {
      notificationCentreContent.style.transform = 'translateX(400px)'
    }, 1);
    setTimeout(() => {
      notificationCentreContainer.style.display = 'none';
    }, 200);
  }
});