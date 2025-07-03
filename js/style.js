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





const form = document.getElementById("contactForm");
const submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);

  const response = await fetch("https://formspree.io/f/mblybajn", {
    method: "POST",
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  });

  if (response.ok) {
    alert("Thank you! Your message has been sent.");
    form.reset();
  } else {
    alert("Oops! There was a problem submitting your form.");
  }
});
