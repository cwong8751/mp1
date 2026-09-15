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