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
const errCol = () => {
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
        $("p").text("UA phone number").css("color", "black");
    }, 5000);
};
$(document).ready(function () {
    $(document.body).on("focusin focusout change blur","#billing_phone", function (e) {
        if (e.target.value.length) {
            try {
                libphonenumber.parsePhoneNumberWithError(e.target.value, "UA");
            }catch (error){
                if(error instanceof libphonenumber.ParseError){
                    errCol();
                }
            }
            if (libphonenumber.parsePhoneNumber(e.target.value, "UA").isValid("UA") === false ||
                $("#billing_phone").val().match(/[a-zA-Zа-яА-Я€´`!@#$%^&*()_\-=\[\]{};':"\\|,.<>\/?~]380[0-9]{9}/ig) ||
                $("#billing_phone").val().match(/380[0-9]{9}./ig)){
                errCol();
            }else if($("#billing_phone").val().match(/[a-zA-Zа-яА-Я€´`!@#$%^&*()_\-=\[\]{};':"\\|,.<>\/?~]0[0-9]{9}/ig) ||
                $("#billing_phone").val().match(/0[0-9]{9}./ig)){
                errCol();
            }
        }
    });
});
