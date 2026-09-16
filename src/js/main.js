/* Your JS here. */
console.log('Hello World!')

// carousle controls
const carousel_body = document.getElementById('carousel');
const prev_button = document.getElementById('prev-slide');
const next_button = document.getElementById('next-slide');
const slide_counter = document.getElementById('slide-counter');

let current_slide = 0;
let total_slides = 3;

prev_button.addEventListener('click', () => {
    if(current_slide > 0) {
        current_slide--;
        slide_counter.textContent = `Slide ${current_slide + 1} of ${total_slides}`;
    }
    // used claude to help me scroll smoothly 
    carousel.scrollBy({ left: -carousel_body.offsetWidth, behavior: 'smooth' });
});

next_button.addEventListener('click', () => {
    if(current_slide < total_slides - 1) {
        current_slide++;
        slide_counter.textContent = `Slide ${current_slide + 1} of ${total_slides}`;
    }
    // used claude to help me scroll smoothly
    carousel.scrollBy({ left: carousel_body.offsetWidth, behavior: 'smooth' });
});

// smooth scrolling for nav bar items
// citation: https://medium.com/@glynlewington/navbar-w-smooth-scrolling-same-page-links-accessibility-cf163b5427e4
const nav_projects = document.getElementById('nav-projects');
const nav_experience = document.getElementById('nav-experience');
const nav_video = document.getElementById('nav-video');

nav_projects.addEventListener('click', () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

nav_experience.addEventListener('click', () => {
    document.getElementById('experience').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

nav_video.addEventListener('click', () => {
    document.getElementById('video').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// nav bar position indicator 
const nav_bar = document.getElementById('nav-bar');

// add a scroll listener, calculate if possition is within. 
window.addEventListener('scroll', () => {
    const current_position = window.scrollY;
    const projects_position = document.getElementById('projects').offsetTop;
    const experience_position = document.getElementById('experience').offsetTop;
    const video_position = document.getElementById('video').offsetTop;

    const calc_position = current_position + nav_bar.offsetHeight;

    if(calc_position >= projects_position && calc_position < experience_position) {
        console.log("scroll position is within projects");
        document.getElementById('nav-projects').style.backgroundColor = '#6B8E23';
        document.getElementById('nav-projects').style.transition = 'background-color 0.5s';

        document.getElementById('nav-experience').style.backgroundColor = '#8DB600';
        document.getElementById('nav-video').style.backgroundColor = '#8DB600';
    }
    else if (calc_position >= experience_position && calc_position < video_position) {
        console.log("scroll position is within experience");
        document.getElementById('nav-experience').style.backgroundColor = '#6B8E23';
        document.getElementById('nav-experience').style.transition = 'background-color 0.5s';

        document.getElementById('nav-projects').style.backgroundColor = '#8DB600';
        document.getElementById('nav-video').style.backgroundColor = '#8DB600';
    }
    else if (calc_position >= video_position) {
        console.log("scroll position is within video");
        document.getElementById('nav-video').style.backgroundColor = '#6B8E23';
        document.getElementById('nav-video').style.transition = 'background-color 0.5s';

        document.getElementById('nav-projects').style.backgroundColor = '#8DB600';
        document.getElementById('nav-experience').style.backgroundColor = '#8DB600';
    }
    else{
        console.log("scroll position is not within any section");

        document.getElementById('nav-projects').style.backgroundColor = '#8DB600';
        document.getElementById('nav-experience').style.backgroundColor = '#8DB600';
        document.getElementById('nav-video').style.backgroundColor = '#8DB600';
    }
});

// nav bar resizing

window.addEventListener('scroll', () => {
    if (window.scrollY > document.getElementById('nav-bar').offsetHeight) {
        document.getElementById('nav-bar').style.height = '40px';
        document.getElementById('nav-bar').style.transition = 'height 0.5s ease-in-out';
        document.querySelectorAll('#nav-bar li').forEach((li) => {
            li.style.fontSize = '14px';
            li.style.transition = 'font-size 0.5s ease-in-out';
        });
    }

    // reset it back
    if(window.scrollY <= document.getElementById('nav-bar').offsetHeight) {
        document.getElementById('nav-bar').style.height = '50px';
        document.getElementById('nav-bar').style.transition = 'height 0.5s ease-in-out';
        document.querySelectorAll('#nav-bar li').forEach((li) => {
            li.style.fontSize = '18px';
            li.style.transition = 'font-size 0.5s ease-in-out';
        });
    }
});