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




const downloadBtn = document.getElementById("downloadBtn");
const buttonIcon = document.getElementById("buttonIcon");

downloadBtn.addEventListener("click", function (e) {
  e.preventDefault();

  // Add reverse animation class
  downloadBtn.classList.add("reverse");

  // Change icon to check
  buttonIcon.classList.remove("fa-download");
  buttonIcon.classList.add("fa-check");

  // Create a temporary anchor to force download
  const link = document.createElement("a");
  link.href = downloadBtn.getAttribute("href");
  link.download = "Rohit-CV.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // After 2s, remove animation and open in new tab
  setTimeout(() => {
    downloadBtn.classList.remove("reverse");

    buttonIcon.classList.remove("fa-check");
    buttonIcon.classList.add("fa-download");

    // Open file in new tab
    window.open(downloadBtn.getAttribute("href"), "_blank");
  }, 1000);
});