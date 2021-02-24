var database;
var canvas;
var gameState = 0;
var playerCount = 0;
var testerCount = 0;
var form,game,player,tester;
var allPlayers;
var cars, car1, car2, car3, car4;


function setup(){
    database = firebase.database();
    canvas = createCanvas(displayWidth - 50,displayHeight - 130);
    game = new Game();
    game.getState();
    game.start();
   
}



function draw(){

    // if(playerCount === 4){
    //     game.update(1);

    // }
    if(gameState === 1){
        clear();
        game.play();
    }

}


