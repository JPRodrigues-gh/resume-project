function sendMail(contactForm) {
    var templateParams = {
        "to_name": 'James',
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.projectsummary.value
        // "message": 'Check this out!'
    };
    emailjs.init("eoe7HJ_Is5vKPQ8Je");
    emailjs.send("service_jpba_gmail", "template_7mvbj0a", templateParams, "eoe7HJ_Is5vKPQ8Je")
    .then(
        function(response) {
            console.log("SUCCESS", reponse);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;
}