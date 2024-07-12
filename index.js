let color = 'black';
let click = false;
function SetBoard(size){
  let board = document.querySelector(".board");
  let squares=  board.querySelectorAll("div");
  squares.forEach( div => div.remove());
  board.style.gridTemplateColumns =   `repeat(${size},1fr)`; //this creates 16 columns
  board.style.gridtemplateRows = `repeat(${size}, 1fr)`; //this creares 16 rows
  
  let amount = size*size
  for(let i =0; i < amount;i++){
    let square = document.createElement("div");
    square.style.backgroundColor ="white";
    square.addEventListener('mouseover',colorSquare)
    board.insertAdjacentElement("beforeend",square);//this append div beforeend of board
  }
}
SetBoard(16);

function ChangeSize(input){

  if(input>=2 && input <=100){
    
    SetBoard(input)
  }
  else{
    
  }
  
}

function colorSquare(){
  if(click){
    if ((color ==="random")) {
      this.style.backgroundColor =  `hsl(${Math.random() * 360},100%,50%)`;
   } else {
     this.style.backgroundColor = color;
   }
  }
  
}

function changeColor(choice){
 color = choice; 
}

function resetBoard(){
  let board = document.querySelector(".board");
  let squares=  board.querySelectorAll("div");
  squares.forEach( div => div.style.backgroundColor = "white");
}

document.querySelector("body").addEventListener("click",(e) => {
  click =!click // it works like a toggle
  let mode = document.querySelector(".mode");
  if(e.target.tagName !="BUTTON"){
    if(click){
      mode.textContent ="Mode: Coloring"
    }
    else{
      mode.textContent ="Mode: Not Coloring"
    }
  }
  
})