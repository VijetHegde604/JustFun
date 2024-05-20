    function rollDice(){
        var firstValue = Math.floor(Math.random()*6)+1;
        var secondValue = Math.floor(Math.random()*6)+1;
        var resultelemnt = document.getElementById("result");
        var player1Image = document.getElementById("player1Image");
        var player2Image = document.getElementById("player2Image");

        
        if(firstValue == secondValue){
            resultelemnt.textContent = "It's a Draw!!"
        }
        else if(firstValue > secondValue){
            resultelemnt.textContent = "Player 1 Wins!!";
        }

        else if(firstValue < secondValue){
            resultelemnt.textContent = "Player 2 Wins!!";
        } 

        

        player1Image.src="./images/dice"+firstValue+".png";
        player2Image.src="./images/dice"+secondValue+".png";
    }