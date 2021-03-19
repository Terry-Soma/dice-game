// Тоглогчийн ээлжийг хадгалах хувьсагч

var diceDom = document.querySelector(".dice");
var activePlayer,scores,roundScore;

var isGameOver;
initGame();

//
function initGame()
{
    isGameOver =false;
    roundScore = 0;
  activePlayer =0;

 scores = [0,0];


document.getElementById("score-0").textContent = '0';
document.getElementById("score-1").textContent = '0';
var current1 = document.getElementById("current-0");
var current2 = document.getElementById("current-1");
current1.textContent = '0';
current2.textContent = '0';
diceDom.style.display = "none";
document.getElementById('name-0').textContent = 'Player-1';
document.getElementById('name-1').textContent = 'Player-2';
document.querySelector(".player-0-panel").classList.remove('winner');
document.querySelector(".player-1-panel").classList.remove('winner');
document.querySelector(".player-0-panel").classList.remove("active");
document.querySelector(".player-1-panel").classList.remove("active");

document.querySelector(".player-0-panel").classList.add("active");


} 


document.querySelector(".btn-roll").addEventListener("click",function()
{
    if(isGameOver == false){
    var dice =Math.floor(Math.random()*6)+1;
    diceDom.style.display ="block";
    diceDom.src = 'dice-'+dice+'.png';

    if(dice !==1){
        // Toglogchid nemj ugnu
        roundScore += dice;
        document.getElementById("current-"+activePlayer).textContent= roundScore;
    }else{
        // Daraah toglogchid udirdlagad shiljuulne
     switchToNextPlayer();
    }

    }else{
        alert("Game over please click the new game button")

    }

});

// hold button eventListener
document.querySelector(".btn-hold").addEventListener("click",function(){
// onoog tsugluulah
   scores[activePlayer] += roundScore;

//    toglogch hojson esehiig shalgah
document.getElementById("score-"+activePlayer).textContent = scores[activePlayer];

if(scores[activePlayer] >=20)
  {  document.getElementById("name-"+activePlayer).textContent = "Winner";
    document.querySelector(".player-"+activePlayer+"-panel").classList.add("winner");
    isGameOver=true;
    document.querySelector(".player-"+activePlayer+"-panel").classList.remove("active");
} 
else {

    switchToNextPlayer();
}
    // delgetsen toog hevlene
    
    // eeljiin onoog 0
    //toglogchiin eeljiig solih
    
});

function switchToNextPlayer(){
        roundScore =0;
        document.getElementById("current-"+activePlayer).textContent = 0;
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        // улаан цэгийг шилжүүлэх
        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active");
    
        diceDom.style.display="none";
    
}

document.querySelector('.btn-new').addEventListener('click',initGame);
