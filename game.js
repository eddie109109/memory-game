var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

var buttonColors = ["red","blue","green","yellow"];

// $(document).keydown(function() {
//   if (!started) {
//     $("#level-title").text("Level " + level);
//     nextSequence();
//     started = true;
//   }
// });

$(".begin").click(function() {
  if (!started) {
    // alert("game on!");
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function(event) {
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);

  checkAnswer(userClickedPattern.length-1);
});


function nextSequence() {

  userClickedPattern = [];
  
  level++;

  $("#level-title").text("Level " + level);

  var randomNumber =  Math.floor(Math.random()*4);

  var randomChosenColor = buttonColors[randomNumber];

  gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeOut(250).fadeIn(250);

    playSound(randomChosenColor);

    // console.log(gamePattern);

}


function playSound(name) {
  var audio = new Audio("sounds/"+name+".mp3");
  audio.play();
}

function animatePress(currentColor) {
    $("."+ currentColor).addClass("pressed");
    setTimeout(function(){
      $("."+ currentColor).removeClass("pressed");
    },100);
}


function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("success");
    if (userClickedPattern.length === gamePattern.length) {
      congrats();   
      setTimeout(function() {
        nextSequence();
      },1000);
    }

  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },200);
    $("#level-title").text("Game Over, 按start键重来");
    startOver();
  }
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}


function congrats() {
  if (level === 1) {
    alert("对啦!");
  } 
  else if (level === 2) {
    var q1 = prompt('我的英文名字？');
    var q1 = q1.toUpperCase();
    if (q1 === "EDDIE") {
      alert("对了!");
    } else {
      alert("我英文名叫Eddie啊！gameover");
      playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },200);
    $("#level-title").text("Game Over, 按start键重来");
        startOver();
    }
  } 
  else if (level === 4) {
    alert("恭喜到达第4关.");
  } 
  else if (level === 3) {
    var q2 = prompt("我同彭于晏边个靓仔D？(输入1，选我，输入2，选彭于晏)");
      if (q2 === "1") {
        alert("哈哈我都觉得啊!");
      }
      else if (q2 === "2") {
        alert("T我就知道你会选区，gameover!");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
        $("body").removeClass("game-over");
        },200);
        $("#level-title").text("Game Over, 按start键重来");
        startOver();
      }
      else {
        alert("两个都5靓仔? gameover!"); 
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
        $("body").removeClass("game-over");
        },200);
        $("#level-title").text("Game Over, 按start键重来");
        startOver();
      }
  } 

  else if (level === 9) {
    alert("我觉得你无机会见到呢条消息咯");
  } 
  
  else if (level === 5) {
    var q1 = prompt('我中意饮珍珠奶茶么?(输入1表示中意，输入2表示5中意)');
      if (q1 === "1") {
        alert("对啦！我超中意咯，不过呢派戒了");
      } else {
        alert("其实我好中意，不过戒了");
        playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },200);
    $("#level-title").text("Game Over, 按start键重来");
        startOver();
      }
  } 
  
  else if (level === 7) {
  alert("就快啦，第7关!");
 } else if (level === 8){
  alert("You have very good memory!");
 } else if (level === 6){
  var q3 = prompt("我最中意的体育运动？");
  if (q3 === "篮球") {
    alert("对啦!");
  } else {
    alert("系篮球啊！Gameover!");
        playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },200);
    $("#level-title").text("Game Over, 按start键重来");
        startOver();
  }
 } else {
  alert("恭喜晒，你记忆力超群，请截图发给Eddie领奖");
 }

}