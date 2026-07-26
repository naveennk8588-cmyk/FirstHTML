// ===========================
// Typing Animation
// ===========================

const words = [
    "Python Full Stack Developer",
    "Web Developer",
    "Frontend Developer",
    "Problem Solver"
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
            setTimeout(typeEffect, 1000);
            return;
        }

    } else {

        typing.textContent = currentWord.substring(0, charIndex--);

        if (charIndex < 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }

    }

    setTimeout(typeEffect, isDeleting ? 60 : 120);
}

typeEffect();

// ===========================
// Back To Top
// ===========================

const topBtn = document.getElementById("topBtn");

window.onscroll = function(){

    if(document.documentElement.scrollTop > 300){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

}

topBtn.onclick = function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}

// ===========================
// Theme Toggle
// ===========================

const themeBtn = document.getElementById("themeBtn");

themeBtn.onclick = function(){

document.body.classList.toggle("light");

}

// ===========================
// Contact Form
// ===========================

document.getElementById("contactForm").addEventListener("submit",function(e){

e.preventDefault();

alert("Thank you! Your message has been sent successfully.");

this.reset();

});

// ===========================
// Skill Hover
// ===========================

const skills = document.querySelectorAll(".skill-card");

skills.forEach(skill=>{

skill.addEventListener("mouseenter",()=>{

skill.style.transform="translateY(-15px)";

});

skill.addEventListener("mouseleave",()=>{

skill.style.transform="translateY(0px)";

});

});

// ===========================
// Active Navigation
// ===========================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current = "";

sections.forEach(section=>{

const sectionTop = section.offsetTop - 150;

if(pageYOffset >= sectionTop){

current = section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#" + current){

link.classList.add("active");

}

});

});