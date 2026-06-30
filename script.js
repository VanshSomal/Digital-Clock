function updateClock(){
    const clockElement=document.getElementById('clock');
    const now=new Date();

    let hours=now.getHours();
    let minutes=now.getMinutes();
    let seconds=now.getSeconds();
    let amPm =hours>=12? 'PM' : 'AM';

    // convert 24-hours format to 12-hour format
    hours=hours%12;
    hours=hours ? hours:12; //the hour '0' should be '12'

    // Add eading zeros to single digit numbers
    hours=hours<10 ? '0' +hours:hours;
    minutes=minutes<10 ? '0'+minutes:minutes;
    seconds=seconds<10? '0'+seconds:seconds;

    // combine into a display string
    const timeString =`${hours}:${minutes}:${seconds} ${amPm}`;

    // update the DOM
    clockElement.textContent=timeString;
}

updateClock();
// Run the function every 1 second (1000 miliseconds)
setInterval(updateClock,1000);