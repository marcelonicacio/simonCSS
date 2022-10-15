let color = [];
let player = [];
let light = [];
let turn;
let good;
let compTurn;
let intervalId;
let pause = false;
let noise = true;
let on = false;
let win;

const greenPart = document.querySelector('#green');
const redPart = document.querySelector('#red');
const bluePart = document.querySelector('#blue');
const yellowPart = document.querySelector('#yellow');
const btnOn = document.querySelector('#btnOn');
const startBtn = document.querySelector('#startBtn');
const counter = document.querySelector('#counterDisplay');


btnOn.addEventListener('click', (e) => {
    if (btnOn.checked == true) {
        on = true;
    } else {
        on = false;
        counter.innerHTML = '';
        clearColor();
        clearInterval(intervalId);

    }
});

startBtn.addEventListener('click', (e) => {
    if (on || win) {
        play();
    }
});

function play() {
win = false;
color = [];
player = [];
flash = 0;
intervalId = 0;
turn = 1;
counter.innerHTML = 1;
good = true;

for (var i = 0; i < 20; i++){
color.push(Math.floor(Math.random() * 4) + 1)
}
compTurn = true;
intervalId = setInterval(gameTurn,800)
}

function gameTurn() {
    on = false;

    if (flash == turn) {
        clearInterval(intervalId);
        compTurn = false;
        clearColor();
        on = true;
    }
    if (compTurn) {
        clearColor();
        setTimeout(() => {
            if (color[flash] == 1) one();
            if (color[flash] == 2) two();
            if (color[flash] == 3) three();
            if (color[flash] == 4) four();
            flash++;
        },200);
    }
}

function one() {
    if (noise) {
      let audio = document.getElementById("clip1");
      audio.play();
    }
    noise = true;
    greenPart.style.backgroundImage = "radial-gradient(circle at 50% 50%, #c4ee6b 0, #9eec74 20%, #17d06d 50%, #00c36a 60%, #00b86d 70%, #00ac8b 100%)";
  }
  
  function two() {
    if (noise) {
      let audio = document.getElementById("clip2");
      audio.play();
    }
    noise = true;
    redPart.style.backgroundImage = " radial-gradient(circle at 50% 50%, #ff9939 0, #ff7b38 25%, #f1442c 50%, #d90028 75%, #cd0034 100%)";
  }
  
  function three() {
    if (noise) {
      let audio = document.getElementById("clip3");
      audio.play();
    }
    noise = true;
    yellowPart.style.backgroundImage = "radial-gradient(circle at 50% 50%, #ffffa2 0, #e8d027 50%, #958200 100%)";
  }
  
  function four() {
    if (noise) {
      let audio = document.getElementById("clip4");
      audio.play();
    }
    noise = true;
    bluePart.style.backgroundImage = " radial-gradient(circle at 50% 50%, #a3d7ff 0, #058adc 50%, #0045a3 100%)";
  }
  
  function clearColor() {
    greenPart.style.backgroundImage = "linear-gradient(#17D06D,#17D06D)";
    redPart.style.backgroundImage = "linear-gradient(#F1452C,#F1452C)";
    yellowPart.style.backgroundImage = "linear-gradient(#E8D027,#E8D027)";
    bluePart.style.backgroundImage = "linear-gradient(#058ADC,#058ADC)";
  }
  
  function flashColor() {
    greenPart.style.backgroundImage = "radial-gradient(circle at 50% 50%, #c4ee6b 0, #9eec74 20%, #17d06d 50%, #00c36a 60%, #00b86d 70%, #00ac8b 100%)";
    redPart.style.backgroundImage = " radial-gradient(circle at 50% 50%, #ff9939 0, #ff7b38 25%, #f1442c 50%, #d90028 75%, #cd0034 100%)";
    yellowPart.style.backgroundImage = "radial-gradient(circle at 50% 50%, #ffffa2 0, #e8d027 50%, #958200 100%)";
   bluePart.style.backgroundImage = " radial-gradient(circle at 50% 50%, #a3d7ff 0, #058adc 50%, #0045a3 100%)";
  }
  
  greenPart.addEventListener('click', (e) => {
    if (on) {
      player.push(1);
      check();
      one();
      if(!win) {
        setTimeout(() => {
          clearColor();
        }, 300);
      }
    }
  })
  
  redPart.addEventListener('click', (e) => {
    if (on) {
      player.push(2);
      check();
      two();
      if(!win) {
        setTimeout(() => {
          clearColor();
        }, 300);
      }
    }
  })
  
  yellowPart.addEventListener('click', (e) => {
    if (on) {
      player.push(3);
      check();
      three();
      if(!win) {
        setTimeout(() => {
          clearColor();
        }, 300);
      }
    }
  })
  
  bluePart.addEventListener('click', (e) => {
    if (on) {
      player.push(4);
      check();
      four();
      if(!win) {
        setTimeout(() => {
          clearColor();
        }, 300);
      }
    }
  })
  
  function check() {
    if (player[player.length - 1] !== color[player.length - 1])
      good = false;
  
    if (player.length == 10 && good) {
      winGame();
    }
  
    if (good == false) {
      flashColor();
      counter.innerHTML = "NO!";
      setTimeout(() => {
        counter.innerHTML = turn;
        clearColor();
  
        if (pause) {
          play();
        } else {
          compTurn = true;
          flash = 0;
          player = [];
          good = true;
          intervalId = setInterval(gameTurn, 800);
        }
      }, 800);
  
      noise = false;
    }
  
    if (turn == player.length && good && !win) {
      turn++;
      player = [];
      compTurn = true;
      flash = 0;
      counter.innerHTML = turn;
      intervalId = setInterval(gameTurn, 800);
    }
  
  }
  
  function winGame() {
    flashColor();
    counter.innerHTML = "WIN!";
    on = false;
    win = true;
  }
  
