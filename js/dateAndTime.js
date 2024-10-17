const btn = document.getElementById('calendarBtn')
const dateInp = document.getElementById('dateInp')




class CountdownTimer{
    constructor({selector, targetDate}){
        this.selector = selector;
        this.targetDate = targetDate
        this.intervalId = null
        this.start()
    }

    start() {
        this.intervalId = setInterval(() => {
            const nowDate = new Date().getTime();

            const timeRemaining = this.targetDate - nowDate
            const seconds = Math.floor((timeRemaining / 1000) % 60)
            const minutes = Math.floor((timeRemaining / 1000 / 60) % 60)
            const hours = Math.floor((timeRemaining / 1000 / 60 / 60) % 24)
            const days = Math.floor(timeRemaining / 1000 / 60 / 60 / 24)
            
            const timerDisplayBlock = document.querySelector(this.selector)
            timerDisplayBlock.querySelector('[data-value="days"]').textContent = days
            timerDisplayBlock.querySelector('[data-value="hours"]').textContent = hours.toString().padStart(2, '0')
            timerDisplayBlock.querySelector('[data-value="mins"]').textContent = minutes.toString().padStart(2, '0')
            timerDisplayBlock.querySelector('[data-value="secs"]').textContent = seconds.toString().padStart(2, '0')

            if (timeRemaining < 0) {
                alert('time is up')
                clearInterval(this.intervalId)
                btn.disabled = false
                timerDisplayBlock.querySelector('[data-value="days"]').textContent = days
                timerDisplayBlock.querySelector('[data-value="hours"]').textContent = hours
                timerDisplayBlock.querySelector('[data-value="mins"]').textContent = minutes
                timerDisplayBlock.querySelector('[data-value="secs"]').textContent = seconds
            }

        }, 1000)
    }
}


// new CountdownTimer({
//     selector: '#timer-1',
//     targetDate: new Date('Jul 17, 2025').getTime(),
// });

btn.addEventListener('click', () => {
    btn.disabled = true
    if (!dateInp.value) {
        alert('error')
        btn.disabled = false
    } else {
        new CountdownTimer({
            selector: '#timer-1',
            targetDate: new Date(dateInp.value).getTime(),
        });
    }

})