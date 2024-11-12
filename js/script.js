// JavaScript to handle the form submission on the contact page

document.getElementById("contact-form")?.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the form from submitting
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    alert(`Thank you, ${name}! Your message has been sent.`);
    // Reset the form
    document.getElementById("contact-form").reset();
});
