function sendMail(contactForm) {
    emailjs.send("Gmail", "photography", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "enquiry_message": contactForm.projectsummary.value
    })
        .then(
            function (response) {
                console.log("SUCCESS", response);
            },
            function (error) {
                console.log("FAILED", error);
            });

    return false;
}

//---------------------------------------------Carousel

$('.carousel').carousel()

