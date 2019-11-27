$("#fromRegister").on('submit', function (e) {
    console.log('sub');
    e.preventDefault();
    var url_string = window["location"]["href"];
    var url = new URL(url_string);
    var utmcampaign = url.searchParams.get("utm_campaign") ? url.searchParams.get("utm_campaign") : "not set";
    var utmsource = url.searchParams.get("utm_source") ? url.searchParams.get("utm_source") : "not set";
    var utmmedium = url.searchParams.get("utm_medium") ? url.searchParams.get("utm_medium") : "not set";
    if($("#fromRegister").parsley().isValid()){
        $.ajax({
            type: "POST",
            url : "https://script.google.com/macros/s/AKfycbwByeRSNj3VBkl1BfgnM-3PNQOS5lLEts3uh0V4A3sS7XuwhWc/exec",
            data : {
                name: formMain.name.value,
                phone:  formMain.phone.value, 
                email:  formMain.email.value,
                trade:  formMain.trade.value,
                utm_campaign: utmcampaign,
                utm_source: utmsource,
                utm_medium: utmmedium,
                url: url_string
            },
            success: function () {
                alert('Đăng ký thành công');
                formMain.name.value = formMain.phone.value = formMain.email.value = formMain.trade.value  = "";
            },

            dataType: "json"
        }); 
    }
});