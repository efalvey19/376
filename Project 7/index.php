<!DOCTYPE html>
<html>
    <head>
        <title>Chicago</title>
         
        <a href="http://thehobbyts.com/fun-dice-games-ultimate-list/">Instructions for Chicago</a> 

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="scripts.js?<?php echo rand(); ?>"></script>

        <link rel="stylesheet" type="text/css" href="styles.css?<?php echo rand(); ?>" />
    </head>

    <body>

        <h1>Chicago</h1>

        <svg width="500" height="400">

            <rect id="background" x="0" y="0" width="500" height="400" />

            <g>
                <rect id="d1" class="die" x="100" y="100" width="100" height="100" />
                <circle id="d1p1" class="pip" cx="125" cy="125" r="5"  />
                <circle id="d1p2" class="pip" cx="125" cy="150" r="5" />
                <circle id="d1p3" class="pip" cx="125" cy="175" r="5" />
                <circle id="d1p4" class="pip" cx="150" cy="150" r="5" style="visibility: visible;" />
                <circle id="d1p5" class="pip" cx="175" cy="125" r="5" />
                <circle id="d1p6" class="pip" cx="175" cy="150" r="5" />
                <circle id="d1p7" class="pip" cx="175" cy="175" r="5" />
            </g>

            <g>
                <rect id="d2" class="die" x="300" y="100" width="100" height="100" />
                <circle id="d2p1" class="pip" cx="325" cy="125" r="5"  />
                <circle id="d2p2" class="pip" cx="325" cy="150" r="5" />
                <circle id="d2p3" class="pip" cx="325" cy="175" r="5" />
                <circle id="d2p4" class="pip" cx="350" cy="150" r="5" style="visibility: visible;" />
                <circle id="d2p5" class="pip" cx="375" cy="125" r="5" />
                <circle id="d2p6" class="pip" cx="375" cy="150" r="5" />
                <circle id="d2p7" class="pip" cx="375" cy="175" r="5" />
            </g>

            <circle id="puck" cx="250" cy="300" r="25" />
            <text id="point" x="250" y="311">2</text>
            <rect id="playerone" x="25" y="25" width="100" height="25" />
            <text id="playeruno" x="29" y="44">Player One</text>
            <rect id="playertwo" x="375" y="25" width="100" height="25" />
            <text id="playerdos" x="379" y="44">Player Two</text>
            <circle id="circle1" cx="75" cy="75" r="15" />
            <text id="score1" x="71" y="80">0</text>
            <circle id="circle2" cx="425" cy="75" r="15" />
            <text id="score2" x="421" y="80">0</text> 
            <rect id="box" x="202" y="230" width="100" height="25" />
            <text id="name" x="225" y="248">Round</text>
            <polyline id="triang1" points="135,35 155,25 155,45"  /> 
            <polyline id="triang2" points="365,35 345,25 345,45" style="visibility: hidden;"  />
            <text id="message" x="250" y="360"></text>
            


        </svg>

        <div id="controls">
            <button onclick="rollDice()">Roll Dice!</button>
        </div>

    </body>
</html>