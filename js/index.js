
$(document).ready(function(){
    $("#check").click(function(){
        const val = $("#billing_phone").val();
        if((val.match(/[+]380[0-9]{9}/ig) && val.length === 13) || val.length === 0){
            $("#billing_phone").css({
                "background-color": "white",
                "border": "thin solid black"
            });

            $("#billing_phone").val("");
            $("p").text("phone number").css("color", "black");
        }else{
            $("#billing_phone").css({
                "background-color": "#ffbfbf",
                "border": "thick solid #cc0033"
            });
            $("p").text("error").css("color", "#cc0033");
        }
    });
});

