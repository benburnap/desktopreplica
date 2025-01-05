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

const windowsbutton = document.getElementById('windowsbutton');
const windowContainer = document.getElementById('windowContainer');
const windowContent = document.querySelector('.window-content');

windowsbutton.addEventListener('click', () => {
    if (windowContainer.classList.contains('active')) {
      windowContainer.classList.remove('active');
       windowContainer.style.display = 'none'; //hide the window immediately
    } else {
         windowContainer.style.display = 'flex';
        windowContainer.classList.add('active');
    }
});

window.addEventListener('click', (event) => {
    if (windowContainer.classList.contains('active') && !windowContent.contains(event.target) && event.target !== windowsbutton) {
         windowContainer.classList.remove('active');
         windowContainer.style.display = 'none';
    }
});
