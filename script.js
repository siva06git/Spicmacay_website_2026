// --- Slideshow Logic ---
let slideIndex = 0; // Start at the first slide (index 0)

// Function to control the slides
function showSlides() {
    let i;
    // Get all elements with the class 'mySlides'
    let slides = document.getElementsByClassName("mySlides"); 
    
    // 1. Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    // 2. Increment the slide index, and loop back to 0 if we passed the last one
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1; // Start over
    }
    
    // 3. Display the current slide (Note: slides are 0-indexed in array, but 1-indexed in JS logic)
    slides[slideIndex - 1].style.display = "block";  
    
    // 4. Call this function again after 4000 milliseconds (4 seconds)
    setTimeout(showSlides, 4000); 
}

// Start the slideshow when the page loads
showSlides();