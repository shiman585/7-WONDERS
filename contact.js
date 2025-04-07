
// Handle form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    // Show the popup
    document.getElementById("popupMessage").classList.add("active");
    // Clear the form
    document.getElementById("contactForm").reset();
});

{/* // Close the popup when button is clicked */}
function closePopup() {
    document.getElementById("popupMessage").classList.remove("active");
}

// geo location start
document.getElementById("locationIcon").addEventListener("click", function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            alert("Your current location is: \nLatitude: " + lat + "\nLongitude: " + lon);
        }, function() {
            alert("Unable to retrieve your location.");
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
});
// geo location end