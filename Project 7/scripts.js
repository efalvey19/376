var round = 2;
var p1score = 0;
var p2score = 0;
var turn = 1;
var points = 1;
/*
 * Checks the result of the current roll and declares a win, loss, or continuation.
 */
function checkRoll(roll) {
        var message = "";
        
        if (roll == round){
            if (turn == 1){
                p1score ++;
            } else {
                p2score ++;
            }
            round++;
            endRound();
            if (round == 13){
                endGame();
            } 
            
    }         


}

function endGame() {
    
    // Determine who is the winner and loser of the game
    if (p1score > p2score) {
        $("#message").text("Congratulations Player 1 wins!");
    } else {
        $("#message").text("Congratulations Player 2 wins!");
    }
}

function endRound() {
    
    // Step 1: Sees who is the winner of a round
        $("#message").text("");
        points += round;
    
    // Step 2: Resets game controls for another round
    $("#score1").text(p1score);
    $("#score2").text(p2score);
    $("#point").text(round);
       
}

/*
 * Rolls both dice at the same time and checks the results.
 */
function rollDice() {

        var roll1 = rollDie("d1");
        var roll2 = rollDie("d2");
        var total = roll1 + roll2;

        console.log("Total: " + total);

        checkRoll(total); 
        if (turn == 1){
            turn = 2;
            $("#triang1").css("visibility", "hidden");
            $("#triang2").css("visibility", "visible");
        } else {
            turn = 1;
            $("#triang1").css("visibility", "visible");
            $("#triang2").css("visibility", "hidden");
        }
}

/*
 * Rolls the given die which updates the pips and returns the number rolled.
 *
 * dieNum - the ID of the die to roll
 */
function rollDie(dieNum) {
    // Step 1: hide every pip
    $("#" + dieNum + " ~ .pip").css("visibility", "hidden");

    // Step 2: generate a random number between 1 and 6 (inclusive)
    var roll = Math.ceil(Math.random() * 6);
    console.log(dieNum + ": " + roll);

    // Step 3: show the appropriate pips based on the roll
    if (roll == 1) {
        $("#" + dieNum + "p4").css("visibility", "visible");
    } else if (roll == 2) {
        $("#" + dieNum + "p1").css("visibility", "visible");
        $("#" + dieNum + "p7").css("visibility", "visible");
    } else if (roll == 3) {
        $("#" + dieNum + "p1").css("visibility", "visible");
        $("#" + dieNum + "p4").css("visibility", "visible");
        $("#" + dieNum + "p7").css("visibility", "visible");
    } else if (roll == 4) {
        $("#" + dieNum + "p1").css("visibility", "visible");
        $("#" + dieNum + "p3").css("visibility", "visible");
        $("#" + dieNum + "p5").css("visibility", "visible");
        $("#" + dieNum + "p7").css("visibility", "visible");
    } else if (roll == 5) {
        $("#" + dieNum + "p1").css("visibility", "visible");
        $("#" + dieNum + "p3").css("visibility", "visible");
        $("#" + dieNum + "p4").css("visibility", "visible");
        $("#" + dieNum + "p5").css("visibility", "visible");
        $("#" + dieNum + "p7").css("visibility", "visible");
    } else  { // roll == 6
        $("#" + dieNum + "p1").css("visibility", "visible");
        $("#" + dieNum + "p2").css("visibility", "visible");
        $("#" + dieNum + "p3").css("visibility", "visible");
        $("#" + dieNum + "p5").css("visibility", "visible");
        $("#" + dieNum + "p6").css("visibility", "visible");
        $("#" + dieNum + "p7").css("visibility", "visible");
    }

    return roll;
}
