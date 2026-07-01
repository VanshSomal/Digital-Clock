function updateClock(){
    const clockElement=document.getElementById('clock');
    const dateElement=document.getElementById('date');
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


    // DATE LOGIC
    // OPtions to format the date nicely
    const options={
        weekday:'long',
        year:'numeric',
        month:'long',
        day:'numeric'
    };
    // Formats dae to local readable text (eg. "Tuesday. June 30, 2026")
    const dateString=now.toLocaleDateString('en-US',options);
    // Update the DOM for date
    dateElement.textContent=dateString;
}

function updateWorldClocks(){
    const now=new Date();

    const timeOptions={
        hour:'2-digits',
        minute:'2-digits',
        second:'2-digits',
        hour12:true
    };

    const dateOptions={
        weekday:'short',
        month:'short',
        day:'numeric',
        year:'numeric'
    };

    document.getElementById('ny-clock').textContent=now.toLocaleTimeString('en-US',{timeOptions,timeZone:'America/New_York'});
    document.getElementById('ny-date').textContent=now.toLocaleDateString('en-US',{dateOptions,timeZone:'America/New_York'});

    document.getElementById('london-clock').textContent=now.toLocaleTimeString('en-US',{timeOptions,timeZone:'Europe/London'});
    document.getElementById('london-date').textContent=now.toLocaleDateString('en-US',{dateOptions,timeZone:'Europe/London'});

    document.getElementById('tokyo-clock').textContent=now.toLocaleTimeString('en-US',{timeOptions,timeZone:'Asia/Tokyo'});
    document.getElementById('tokyo-date').textContent=now.toLocaleDateString('en-US',{dateOptions,timeZone:'Asia/Tokyo'});

    document.getElementById('toronto-clock').textContent=now.toLocaleTimeString('en-US',{timeOptions,timeZone:'America/Toronto'});
    document.getElementById('toronto-date').textContent=now.toLocaleDateString('en-US',{dateOptions,timeZone:'America/Toronto'});




}

updateClock();
updateWorldClocks();
// Run the function every 1 second (1000 miliseconds)
setInterval(updateClock,1000);
setInterval(updateWorldClocks,1000);

// --- HORIZONTAL NAVIGATION CAROUSEL LOGIC ---
const track = document.getElementById('card-track');
const btnLeft = document.getElementById('scroll-left');
const btnRight = document.getElementById('scroll-right');

// Define how far the carousel should scroll on each button click (e.g., width of 1 card + gap)
const scrollAmount = 224; // 208px card width + 16px gap (gap-4)

btnRight.addEventListener('click', () => {
    track.scrollLeft += scrollAmount;
});

btnLeft.addEventListener('click', () => {
    track.scrollLeft -= scrollAmount;
});
// npx @tailwindcss/cli -i ./input.css -o ./output.css --watch