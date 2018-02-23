
let columnPlacement=document.getElementById("background");
// let boxPlacement=document.getElementById("event.target.id");
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

    // column.appendChild(box);
// create a new div whenever and wherever a click occurs //
        // let boxPlacement=document.getElementById("event.target.id");
        let box=document.createElement("div");
        box.classList.add("square")
        box.classList.add(currentPlayerPiece);
        let j=(clickEvent.length)-1;
        console.log(j);  
        let squareId="square" + j;
        console.log(squareId);
        box.id=squareId;
        column.appendChild(box);

    

// alternate class attributes //
    let playerPieceHolder=currentPlayerPiece;
    currentPlayerPiece=nextPlayerPiece;
    nextPlayerPiece=playerPieceHolder;
    

    

    // function newFunction() {
    //     console.log(clickEvent.length);
    // }
}




    
// handleClick = function (event) {
//     var cell = event.target;

//     if (cell.innerHTML.length > 0) { 
//         alert("Select a different square");
//     }
//     cell.innerHTML = currentPlayer;
//     moveCount = moveCount + 1;

//     if (currentPlayer === "X") {
//         playerSelections = playerXSelections;
//         nextPlayer = "O";
//     } else {
//         playerSelections = playerOSelections;
//         nextPlayer = "X";
//     }

//     playerSelections.push(Number(cell.id));

//     const alertWin = function() {
//         alert(winMessage);
//         console.log(playerSelections);
//     }

//     if (checkWin(playerSelections)) {
//         window.setTimeout(alertWin, 300);
//     } else {
//         if(moveCount == 9){
//             alert(drawMessage);
//         }  
//     }


//     // Swap players

//     currentPlayer = nextPlayer;

// }
