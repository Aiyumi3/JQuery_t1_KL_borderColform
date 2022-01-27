
/**
 * Задача:
 * На сайте поле ввода номера телефона проверяется на правильность
 * номера по Украине библиотекой libphonenumber-js
 * Если ввести короткий номер (напр. +38099123),
 * библиотека выбросит ошибку TOO_SHORT
 * Если каким-то образом в поле только буквы (напр. +йцукенгшщзхъ),
 * либа выбросит NOT_A_NUMBER
 * Нам необходимо перехватить эти ошибки и просто делать красный border
 */

   

$(document).ready(function(){
    $("#check").click(function(){
        const val = $("#billing_phone").val();
        try {
            libphonenumber.parsePhoneNumberWithError(val, "UA");
            $("#billing_phone").val("");
        }catch (error){
            if(error instanceof libphonenumber.ParseError){
                $("#billing_phone").css({
                    "background-color": "#ffbfbf",
                    "border": "thick solid #cc0033"
                });
                $("p").text("error").css("color", "#cc0033");
                setTimeout(function () {
                    $("#billing_phone").css({
                        "background-color": "white",
                        "border": "thin solid black"
                    });
                    $("#billing_phone").val("");
                    $("p").text("phone number").css("color", "black");
                }, 1700);
            }
        }
    });
});
