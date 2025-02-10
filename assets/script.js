document.addEventListener("DOMContentLoaded", function() {
    const bonusButton = document.querySelector('.cta-button');

    bonusButton.addEventListener('click', function(event) {
        event.preventDefault(); 
        alert("Congratulations! Your bonus is on the way!"); 
    });
});