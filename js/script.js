$(document).ready(function(){
    var woordenNL = ["banaan", "auto", "tafel", "elektriciteit", "stoel"];
    var woordenEN = ["banana", "car", "table", "electricity", "chair"];
    var score = 0;

    function woordcheck(woord) {
        var waarde = $("input").val();
        var uitslag;
        if(waarde === woord) {
            $("#geraden").html("goed geraden");
            $("#geraden").css('color', 'green');
            score++;
        } else {
            $("#geraden").html("fout");
            $("#geraden").css('color', 'red');
        }
    }

    $("#start").click(function() {
        var x = 0;
        $('#start').html("Opniew starten");
        $("#geraden").html("");
        $("#woord").html(woordenNL[x]);
        $("input").keyup(function (e) {
            if (e.keyCode == 13) {
                if (x <= 4) {
                    woordcheck(woordenEN[x]);
                    x++;
                    $("#woord").html(woordenNL[x]);
                    $("input").val("");
                } else if (x >= 4){
                    $("#geraden").html("score: " + score + "klik op de knop om opnieuw te beginnen");
                    $("#geraden").css('color', 'blue');
                }
            }
        });
    });


});
