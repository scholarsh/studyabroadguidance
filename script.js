document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    alert('Thank you, ' + document.getElementById('name').value + '. We have received your message and will contact you shortly.');
});
