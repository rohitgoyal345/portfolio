function animateCounters() {
    const counters = document.querySelectorAll('#content-home .counter');
    const duration = 2000;

    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        let current = 0;
        const stepTime = Math.max(Math.floor(duration / target), 15);

        const updateCount = () => {
            if (current < target) {
                current++;
                counter.innerText = current + "+";
                setTimeout(updateCount, stepTime);
            } else {
                counter.innerText = target + "+";
            }
        };

        updateCount();
    });
}

function resetCounters() {
    const counters = document.querySelectorAll('#content-home .counter');
    counters.forEach(counter => {
        counter.innerText = "0+";
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Run on initial load if About tab is active
    if (document.querySelector('#tab-home').classList.contains('active')) {
        animateCounters();
    }

    const aboutTab = document.querySelector('#tab-home');
    aboutTab.addEventListener('shown.bs.tab', () => {
        resetCounters();
        animateCounters();
    });
});