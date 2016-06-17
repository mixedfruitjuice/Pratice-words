$(document).ready(function(){
    // List of dutch words
    var woordenNL = ["banaan", "auto", "tafel", "elektriciteit", "stoel", "bord", "stift", "oplader", "prullenbak", "deur", "muis", "papier", "klauw", "kabel", "muismat"];
    // List of english words
    var woordenEN = ["banana", "car", "table", "electricity", "chair", "board", "marker", "charger", "bin", "door", "mouse", "paper", "claw", "cable", "mouse pad"];
    // Score variable that is used to calculate the percentage
    var score = 0;

    // function to check if the word is guessed right
    function woordcheck(woord) {
        var waarde = $("input").val();

        if(waarde == woord) {
            $("#geraden").html("goed geraden");
            $("#geraden").css('color', 'green');
            //Score is going up with + 1 everytime a word is guessed right
            score++;
            console.log(woord);
        }

        if (waarde != woord) {
            $("#geraden").html("fout");
            $("#geraden").css('color', 'red');
        }
    }

    // variable that is going up with + 1 everytime the a word guessed so the next word in the array is displayed
    var x;

    // detects enter press
    $("input").keyup(function (e) {
        if (e.keyCode == 13) {
            var woordlengte = woordenEN.length;

            // checks if all the words are guessed using the number of words in the array
            if (x < woordlengte) {
                woordcheck(woordenEN[x]);
                x++;
                $("#woord").html(woordenNL[x]);
                // input field is emptied
                $("input").val("");
            }

            if (x >= woordlengte) {
                // endscore is calculated in percentage by using the score and the number of words
                var endresult = Math.round(score / woordenEN.length * 100);
                $("#woord").html("");
                $("#geraden").html(endresult + "% gescoord klik op de knop om opniew te spelen");
                $("#geraden").css('color', 'blue');
            }
        }
    });

    // Clickfunction the to start or restart the game
    $("#start").click(function() {
        // Score and x are set back to 0 when restarting or starting the game
        x = 0;
        score = 0;
        $("input").val("");
        $('#start').html("Opniew starten");
        $("#geraden").html("");
        $("#woord").html(woordenNL[x]);

    });
});
