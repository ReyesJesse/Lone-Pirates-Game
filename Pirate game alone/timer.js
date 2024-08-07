let timer = 60;

function decreaseTimer() {
    if (timer > 0) {
        timer--;
        document.querySelector('#timer').innerHTML = timer;
        setTimeout(decreaseTimer, 1000);
    } else {
        // Optional: Do something when the timer reaches zero
        document.querySelector('#timer').innerHTML = 'Time\'s up!';
    }
}

decreaseTimer();
