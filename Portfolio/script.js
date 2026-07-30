// ===========================
// PRELOADER
// ===========================
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    preloader.classList.add('hide');
});

// ===========================
// TYPING ANIMATION
// ===========================
const words = [
    "Python Full Stack Developer",
    "Web Developer",
    "Frontend Developer",
    "Problem Solver",
    "API Integrator"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const typing = document.getElementById("typing");
    const currentWord = words[wordIndex];

    if (!isDeleting) {
        typing.textContent = currentWord.substring(0, charIndex++);
        if (charIndex > currentWord.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }
    } else {
        typing.textContent = currentWord.substring(0, charIndex--);
        if (charIndex < 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }
    setTimeout(typeEffect, isDeleting ? 50 : 120);
}
typeEffect();

// ===========================
// BACK TO TOP
// ===========================
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function() {
    if (document.documentElement.scrollTop > 400) {
        topBtn.style.display = "flex";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// ===========================
// THEME TOGGLE
// ===========================
const themeBtn = document.getElementById("themeBtn");
const themeIcon = themeBtn.querySelector("i");

themeBtn.addEventListener("click", function() {
    document.body.classList.toggle("light");
    if (document.body.classList.contains("light")) {
        themeIcon.className = "fas fa-sun";
    } else {
        themeIcon.className = "fas fa-moon";
    }
});

// ===========================
// MOBILE MENU
// ===========================
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", function() {
    navLinks.classList.toggle("active");
});

// Close menu when clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// ===========================
// CONTACT FORM WITH GOOGLE SHEETS
// ===========================
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const form = this;
    const formData = new FormData(form);
    
    // YOUR GOOGLE APPS SCRIPT URL - PASTE HERE
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyqiGUyFlXpp8KqvAS-1rbItFTbt78EZKoziCGyAXBvzWnmiW07UjlrBOzBp81O4W1S/exec';
    
    const submitBtn = document.getElementById('submitBtn');
    const originalText = submitBtn.innerHTML;
    const messageDiv = document.getElementById('formMessage');
    
    // Disable button and show loading
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    messageDiv.innerHTML = '';
    
    // Send data to Google Apps Script
    fetch(scriptURL, { 
        method: 'POST', 
        body: formData 
    })
    .then(response => response.json())
    .then(data => {
        if (data.result === 'success') {
            messageDiv.innerHTML = `
                <div style="background: rgba(56, 189, 248, 0.1); 
                            border: 1px solid #38bdf8; 
                            padding: 15px; 
                            border-radius: 10px; 
                            color: #38bdf8;">
                    <i class="fas fa-check-circle"></i> 
                    ✅ Thank you! Your message has been sent successfully. 
                    Check your email for confirmation!
                </div>
            `;
            form.reset();
        } else {
            throw new Error(data.message || 'Something went wrong');
        }
    })
    .catch(error => {
        messageDiv.innerHTML = `
            <div style="background: rgba(239, 68, 68, 0.1); 
                        border: 1px solid #ef4444; 
                        padding: 15px; 
                        border-radius: 10px; 
                        color: #ef4444;">
                <i class="fas fa-exclamation-circle"></i> 
                ❌ Error: ${error.message}. Please try again or contact me directly.
            </div>
        `;
    })
    .finally(() => {
        // Re-enable button
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
    });
});

// ===========================
// ACTIVE NAVIGATION
// ===========================
const sections = document.querySelectorAll("section");
const navLinksAll = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function() {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 200;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinksAll.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

// ===========================
// SKILL BAR ANIMATION ON SCROLL
// ===========================
const skillBars = document.querySelectorAll(".skill-progress");

const observerOptions = {
    threshold: 0.5,
    rootMargin: "0px"
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bar = entry.target;
            const width = bar.style.width;
            bar.style.width = "0%";
            setTimeout(() => {
                bar.style.width = width;
            }, 300);
        }
    });
}, observerOptions);

skillBars.forEach(bar => {
    observer.observe(bar);
});

// ===========================
// SMOOTH SCROLL FOR NAV LINKS
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        if (targetId === "#") return;
        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

// ===========================
// CONSOLE LOG
// ===========================
console.log("🚀 Portfolio loaded successfully!");
console.log("👨‍💻 Developed by Naveen Kumar");

// ===========================
// WHATSAPP & CONTACT FUNCTIONS
// ===========================

// WhatsApp click handler
document.querySelectorAll('.contact-item .fa-whatsapp').forEach(icon => {
    const parent = icon.closest('.contact-item');
    if (parent) {
        parent.addEventListener('click', function(e) {
            e.stopPropagation();
            window.open('https://wa.me/919384166156', '_blank');
        });
    }
});

// Email click handler
document.querySelectorAll('.contact-item .fa-envelope').forEach(icon => {
    const parent = icon.closest('.contact-item');
    if (parent) {
        parent.addEventListener('click', function(e) {
            e.stopPropagation();
            window.location.href = 'mailto:naveen.nk8588@gmail.com';
        });
    }
});

// Phone click handler
document.querySelectorAll('.contact-item .fa-phone').forEach(icon => {
    const parent = icon.closest('.contact-item');
    if (parent) {
        parent.addEventListener('click', function(e) {
            e.stopPropagation();
            window.location.href = 'tel:+919384166156';
        });
    }
});

// GitHub click handler
document.querySelectorAll('.contact-item .fa-github').forEach(icon => {
    const parent = icon.closest('.contact-item');
    if (parent) {
        parent.addEventListener('click', function(e) {
            e.stopPropagation();
            window.open('https://github.com/naveennk8588-cmyk', '_blank');
        });
    }
});

// LinkedIn click handler
document.querySelectorAll('.contact-item .fa-linkedin-in').forEach(icon => {
    const parent = icon.closest('.contact-item');
    if (parent) {
        parent.addEventListener('click', function(e) {
            e.stopPropagation();
            window.open('https://linkedin.com/in/your-profile', '_blank');
        });
    }
});

// ===========================
// SOCIAL ICON TRACKING (Optional)
// ===========================
document.querySelectorAll('.social-icons a, .footer-social a').forEach(link => {
    link.addEventListener('click', function(e) {
        const platform = this.getAttribute('aria-label');
        console.log(`🔗 Clicked on ${platform}`);
        // You can add analytics tracking here if needed
    });
});

console.log('📱 All social links and contacts are now active!');
console.log('💬 WhatsApp: +91 9384166156');
console.log('📧 Email: naveen.nk8588@gmail.com');