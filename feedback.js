
//  RATING FORM START
    function setRating(starIndex) {
        const stars = document.querySelectorAll('.rating-stars i');
        const ratingInput = document.getElementById('rating');
        ratingInput.value = starIndex;

        stars.forEach((star, index) => {
            if (index < starIndex) {
                star.classList.add('filled');
            } else {
                star.classList.remove('filled');
            }
        });
    }
    // RATING FORM END


    // QUESTION FORM START
    function submitFeedback() {
        const rating = document.getElementById('rating').value;
        const message = document.getElementById('message').value;

        if (rating === '0' || message === '') {
            alert('Please provide a rating and a message.');
        } else {
            alert(`Thank you for your feedback! Rating: ${rating}, Message: ${message}`);
            // You can submit the form data here via an API call or save it in a database
        }
    }
// QUESTION FORM END