<!DOCTYPE html>
<html>
    <head>
        <title>Engelse woorden</title>
        <!--Import Google Icon Font-->
        <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <!--Import materialize.css-->
        <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>
        <link type="text/css" rel="stylesheet" href="css/style.css">
        <!--Let browser know website is optimized for mobile-->
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <!--Import jQuery before materialize.js-->
        <script type="text/javascript" src="js/jquery.js"></script>
        <script type="text/javascript" src="js/materialize.min.js"></script>
        <script type="text/javascript">

        </script>

    </head>
    <body>
    <nav class="lime darken-1" role="navigation">
        <div class="nav-wrapper container"><a id="logo-container" class="brand-logo center">Engelse woorden</a>
            <ul class="right hide-on-med-and-down">
            </ul>
            <ul id="nav-mobile" class="side-nav">
            </ul>
        </div>
    </nav>

    <h1 id="woord" class="center"></h1>
    <h4 id="geraden" class="center"></h4>
    <div class="container">
        <form id="antwoord"  onsubmit="return false;" class="center-block">
            <div class="row">
                <div class="input-field">
                    <input id="icon_prefix" onkeypress="return noenter()" type="text" class="validate waarde">
                    <label for="icon_prefix">Antwoord</label>
                </div>
            </div>
        </form>
        <div class="center">
            <a id="start" class="waves-effect waves-light btn lime darken-1">Start</a>
            <h3 id="geraden"></h3>
        </div>
    </div>
    <script type="text/javascript" src="js/script.js"></script>
    </body>
</html>
