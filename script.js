const nameInput = document.getElementById("name");
const dobInput = document.getElementById("dob");
const yearsEl = document.getElementById("years");
const monthsEl = document.getElementById("months");
const daysEl = document.getElementById("days");
const greetingEl = document.getElementById("greeting");

dobInput.max = new Date().toISOString().split("T")[0];

document.getElementById("calculateBtn").addEventListener("click", calculateAge);

function calculateAge() {
    const name = nameInput.value.trim();

    if (name === "" || !dobInput.value) {
        alert("Please Enter Your Name And Date Of Birth.");
        return;
    }

    const birthDate = new Date(dobInput.value);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    greetingEl.textContent = `Hello! ${name}, Your Age Is`;

    animateValue(yearsEl, years);
    animateValue(monthsEl, months);
    animateValue(daysEl, days);
}

function animateValue(element, value) {
    let current = 0;
    const increment = Math.max(1, Math.floor(value / 30));

    const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
            element.textContent = value;
            clearInterval(timer);
        } else {
            element.textContent = current;
        }
    }, 20);
}
