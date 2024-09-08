let timer;
let minutes = 0;
let seconds = 0;

function startTimer() {
    if (timer) clearInterval(timer);
    
    timer = setInterval(function() {
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
        }
        document.getElementById('timer-display').innerText = `Timer: ${formatTime(minutes)}:${formatTime(seconds)}`;
    }, 1000);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
