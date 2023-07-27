const public_key = "ECZnDfndQHxfORbGd";
const form = document.getElementById("contact-form");

(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init(public_key);
})();

window.onload = function () {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    // generate a five digit number for the contact_number variable
    this.contact_number.value = (Math.random() * 100000) | 0;
    // these IDs from the previous steps
    emailjs.sendForm("contact_service", "prestige", this).then(
      function () {
        form.reset();
        window.alert("Your information was submitted successfully!");
      },
      function (error) {
        window.alert("ERROR: Please resubmit!");
      }
    );
  });
};
