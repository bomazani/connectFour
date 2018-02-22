
let x=document.getElementById("background");


for(i=0;i<7;i++){
    let rectangle=document.createElement("div");
    rectangle.setAttribute("class","column");
    let columnId="column" + i;
    rectangle.setAttribute("id", columnId);

    x.appendChild(rectangle);

    rectangle.addEventListener("click", clickEvent);
    function clickEvent(event){
        let clickLocation=event.target;
        console.log(clickLocation);
    }
    

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
