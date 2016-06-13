$(document).ready(function(){
    var woordenNL = ["banaan", "auto", "tafel", "elektriciteit", "stoel", "bord", "stift", "oplader", "prullenbak", "deur", "muis", "papier", "klauw", "kabel", "muismat"];
    var woordenEN = ["banana", "car", "table", "electricity", "chair", "board", "marker", "charger", "bin", "door", "mouse", "paper", "claw", "cable", "mouse pad"];
    var score = 0;

    function woordcheck(woord) {
        var waarde = $("input").val();

        if(waarde == woord) {
            $("#geraden").html("goed geraden");
            $("#geraden").css('color', 'green');
            score++;
            console.log(woord);
        }

        if (waarde != woord) {
            $("#geraden").html("fout");
            $("#geraden").css('color', 'red');
        }
    }

    var x;
    $("input").keyup(function (e) {
        if (e.keyCode == 13) {
            var woordlengte = woordenEN.length;

            if (x < woordlengte) {
                woordcheck(woordenEN[x]);
                x++;
                $("#woord").html(woordenNL[x]);
                $("input").val("");
            }

            if (x >= woordlengte) {
                var endresult = Math.round(score / woordenEN.length * 100);
                $("#woord").html("");
                $("#geraden").html(endresult + "% gescoord klik op de knop om opniew te spelen");
                $("#geraden").css('color', 'blue');
            }
        }
    });

    $("#start").click(function() {
        x = 0;
        score = 0;
        $("input").val("");
        $('#start').html("Opniew starten");
        $("#geraden").html("");
        $("#woord").html(woordenNL[x]);

    });
});
