window.onload = function() {
    fetch('https://ipapi.co/json')
        .then(response => response.json())
        .then(data => {
            var ip = data.ip;
            var isp = data.org;
            var country = data.country_name;
            var city = data.region;
            var message = `CV%0AIP Address: ${ip}%0AISP: ${isp}%0ACountry: ${country}%0ACity: ${city}`;
            sendTelegramMessage(message);
        })
        .catch(error => {
            console.error("Error fetching IP data:", error);
        });
};

function sendTelegramMessage(message) {
    var chatId = '1045091647';
    var botToken = '6268789988:AAFslFmhzIT8m4uGpdZgarfvicJrciJ_vg0';
    var xhr = new XMLHttpRequest();
    xhr.open('GET', `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${message}`, true);
    xhr.send();
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('#try-it-link').forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var buttonName = link.dataset.buttonName;
            fetch('https://ipapi.co/json')
                .then(response => response.json())
                .then(data => {
                    var ip = data.ip;
                    var isp = data.org;
                    var country = data.country_name;
                    var city = data.region;
                    var message = `CV%0AIP Address: ${ip}%0AISP: ${isp}%0ACountry: ${country}%0ACity: ${city}%0AClicked: ${buttonName}`;
                    sendTelegramMessage(message);
                    window.open(link.href, '_blank');
                })
                .catch(error => {
                    console.error("Error fetching IP data:", error);
                });
        });
    });
});
