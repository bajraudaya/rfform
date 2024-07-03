function sendMail() {
    // Get values from the form
    let params = {
        name: document.getElementById("firstname").value,
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    // Send email using EmailJS
    emailjs.send("service_q8jkyrl", "template_ztyu038", params)
        .then(function(response) {
            alert("Your message has been sent successfully!");
            console.log("SUCCESS!", response.status, response.text);
        }, function(error) {
            alert("Failed to send your message. Please try again later.");
            console.log("FAILED...", error);
        });
}
