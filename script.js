document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const sixPackCount = document.getElementById('six-pack').value;
    const tenPackCount = document.getElementById('ten-pack').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    const subject = 'Bestelling Eieren';
    const body = `Naam: ${name}\nE-mail: ${email}\nTelefoonnummer: ${phone}\n\nBestelling:\nDoosjes van 6 eieren: ${sixPackCount}\nDoosjes van 10 eieren: ${tenPackCount}\n\nBericht:\n${message}`;
    const mailtoLink = `mailto:julianwilbrink045@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
});
