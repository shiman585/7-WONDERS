// <!-- SPONSAR SEC JS START -->

    const imageContainer = document.getElementById('imageContainer');
    const images = imageContainer.getElementsByTagName('img');
    const imageCount = images.length;

    // Clone the images in the container to create the loop effect
    for (let i = 0; i < imageCount; i++) {
        const clone = images[i].cloneNode(true);
        imageContainer.appendChild(clone);
    }

// <!-- SPONSAR SEC JS END -->

    // <!-- JAVASCRIPT FOR SLIDER START-->
    
        function toggleNext() {
            var element = document.getElementById('leftandin1');
            element.classList.toggle('display');
            element.classList.toggle('displaynone');

            var element2 = document.getElementById('leftandin2');
            element2.classList.toggle('display');
            element2.classList.toggle('displaynone');
        }
 
//    <!-- JAVASCRIPT FOR SLIDER END-->


// JAVASCRIPT FOR BUS AD START
 // Close functionality
 document.querySelector('.ad-close').addEventListener('click', function() {
    this.parentElement.style.display = 'none';
});

// Auto-flip every 8 seconds
let book = document.querySelector('.ad-book');
setInterval(() => {
    book.style.transform = book.style.transform === 'rotateY(-180deg)' ? 
        'rotateY(0deg)' : 'rotateY(-180deg)';
}, 8000);
// JAVASCRIPT FOR BUS AD END