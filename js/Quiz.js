class Quiz {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    question.hide()
    background(130, 179, 200);
    fill ("black");
    textSize(20)
    text("*NOTE:Contestant who answered correct are highlighted in green colour!",130,230); 

        Contestant.getPlayerInfo() 
    var yPos = 250
  if (allContestants !== undefined){
    for (var plr in allContestants)  {
      if(correctAns === allContestants[plr].answer){
        fill("green")
      }else{
        fill("red")
      }
    text(allContestants[plr].name,130,yPos)
    yPos= yPos+30
    var correctAns = "2";
    
  }
  }
  

  
  }

}
