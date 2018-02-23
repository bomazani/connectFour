
let columnPlacement=document.getElementById("background");
let currentPlayerPiece="piece1";
let nextPlayerPiece="piece2";



// dynamically create 7 columns, add class & unique id //
for (let i=0;i<7;i++){
    let rectangle=document.createElement("div");
    rectangle.setAttribute("class", "column");
    let columnId = "column-" + i;
    rectangle.setAttribute("id", columnId);
    columnPlacement.appendChild(rectangle);

 // create an action whenever user clicks & identify the clicked column //
    rectangle.addEventListener("click", clickEvent);
    

}

function clickEvent(event) {
    const column = event.currentTarget;
    // separates the column id numeral //
    const columnIndex = column.id.split('-')[1];
    const squaresInColumn = document.querySelectorAll(`#${column.id} .square`);
    const squareCountInColumn = squaresInColumn.length;


    console.log(column);
    console.log(columnIndex);
    console.log(squareCountInColumn);

// ...

   
// create a new div whenever and wherever a click occurs //
        let box=document.createElement("div");
        box.classList.add("square")
        box.classList.add(currentPlayerPiece);
        let j=(squareCountInColumn);
        console.log(j);  
        let squareId="square" + j;
    // unsuccessful attempt to limit the number of divs to 6 per column. //
    // received an "illegal break" message. //
        // if (squareId>6){
        //     break;
        // }
        console.log(squareId);
        box.id=squareId;
        column.appendChild(box);


// alternate class attributes //
    let playerPieceHolder=currentPlayerPiece;
    currentPlayerPiece=nextPlayerPiece;
    nextPlayerPiece=playerPieceHolder;
  
}

