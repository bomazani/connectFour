
let columnPlacement = document.getElementById("background");
let currentPlayerPiece = "player1";
let nextPlayerPiece = "player2";
let totalMoves=0 // set constant to determine if the game is a draw see line 53 //



let board = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
]


// dynamically create 7 columns, add class & unique id //
for (let i = 0; i < 7; i++) {
    let rectangle = document.createElement("div");
    rectangle.setAttribute("class", "column");
    let columnId = "column-" + i;
    rectangle.setAttribute("id", columnId);
    columnPlacement.appendChild(rectangle);

    // create an action whenever user clicks & identify the clicked column //
    rectangle.addEventListener("click", clickEvent);
}

    let winner = 0; // set constant to end game if a win has occurred. see winner=++ on lines 87, 106, 126, 146 //
    // const totalMoves=0 // set constant to determine if the game is a draw see line 52 //
    

    function clickEvent(event) {
        const column = event.currentTarget;
        // separates the column id numeral //
        const columnIndex = column.id.split('-')[1];
        const squaresInColumn = document.querySelectorAll(`#${column.id} .square`); // '#' + column.id + ' .square'
        const squareCountInColumn = squaresInColumn.length;


        // create a new div whenever and wherever a click occurs //
        let square = document.createElement("div");
        square.classList.add("square")
        square.classList.add(currentPlayerPiece);
        let squareIndex = squareCountInColumn;
        square.id = "square-" + squareIndex;
        // Prevent more than 6 elements per column //
        if (squareIndex < 6){
            column.appendChild(square);
        }
        
        
        
        

        // alternate class attributes //
        console.log(currentPlayerPiece);

        // The following line is a ** ternary expression ** that replaces
        // the four lines of if/else that immediately follows.
        // board[squareIndex][columnIndex] = (currentPlayerPiece === "player1" ? 1 : 2);
        if (currentPlayerPiece === "player1") {
            board[squareIndex][columnIndex] = 1;
            columnPlacement.setAttribute("class","board blackCursor");
        } else {
            board[squareIndex][columnIndex] = 2;
            columnPlacement.setAttribute("class","board redCursor");
        }
        

        // Set edges for the "board" //
        // Edges will prevent "out of bounds" while searching for winner. //
        const edgeX = board[0].length - 3;
        const edgeY = board.length - 3;
        
        // search for 4 in a row horizontally //
        // iterate each row 
        for(let y = 0; y < board.length; y++){
        
        // iterate each cell in the row
        for(let x = 0; x < edgeX; x++) {
            let cell = board[y][x];
            
            // Only check if cell is filled
            if(cell !== 0) {
            
            // Check the next two cells for the same value
            if(cell === board[y][x+1] && cell === board[y][x+2] && cell === board[y][x+3] ) {
                console.log("4 in a row found at " + (x+1) + ":" + (y+1));
                winner = winner + 1; // see line 28, "const winner = 0" // 
            }
            }
        }
      }
        // search for 4 in a row vertically //
        // iterate each row   
        for(let y = 0; y < edgeY; y++){

            // iterate each cell in the row
            for(let x = 0; x < board[0].length; x++) {
            cell = board[y][x];
            
            // Only check if cell is filled
            if(cell !== 0) {
                
                // Check the next two cells for the same value
                if(cell === board[y+1][x] && cell === board[y+2][x]  && cell === board[y+3][x] ) {
                console.log("4 in a row found at " + (x+1) + ":" + (y+1));
                winner = winner + 1; // see line 28, "const winner = 0" //
                }
            }
        }
      }

        // search for 4 in a row diagonally (down right on board) *up right in game* //
        // iterate each row   
        for(let y = 0; y < edgeY; y++){

            // iterate each cell in the row
            for(let x = 0; x < edgeX; x++) {
            cell = board[y][x];
            
            // Only check if cell is filled
            if(cell !== 0) {
                
                // Check the next two cells for the same value
                if(cell === board[y+1][x+1] && cell === board[y+2][x+2] && cell === board[y+3][x+3] ) {
                console.log("4 in a row up-right found at " + (x+1) + ":" + (y+1));
                winner = winner + 1; // see line 28, "const winner = 0" //
                }
            }
        }
      }

        // search for 4 in a row diagonally (down left on board) *up left in game // 
        // iterate each row   
        for(let y = 3; y < board.length; y++){

            // iterate each cell in the row
            for(let x = 0; x < edgeX; x++) {
            cell = board[y][x];
            
            // Only check if cell is filled
            if(cell !== 0) {
                
                // Check the next two cells for the same value
                if(cell === board[y-1][x+1] && cell === board[y-2][x+2] && cell === board[y-3][x+3] ) {
                console.log("4 in a row up-left found at " + (x+1) + ":" + (y+1));
                winner = winner + 1; // see line 28, "const winner = 0" //
                }
            }
        }
      }
            

        let playerPieceTemporaryHolder = currentPlayerPiece;
        currentPlayerPiece = nextPlayerPiece;
        nextPlayerPiece = playerPieceTemporaryHolder;
    totalMoves = totalMoves + 1;
    
    
    console.log(totalMoves);
  
    if(totalMoves==42){
        document.getElementById("message").textContent="We have a DRAW!";

        console.log("we have a DRAW!");
    }

    console.log(winner);
      if(winner==1){
        document.getElementById("message").textContent="We have a Winner!";

        console.log("we have a WINNER!");
    }
    }
    




// //**********************************************************************//
// // Sample Animation: cut & pasted from web (for future experimentation) //
// #myContainer {
//     width: 400px;
//     height: 400px;
//     position: relative;
//     background: yellow;
//   }
//   #myAnimation {
//     width: 50px;
//     height: 50px;
//     position: absolute;
//     background-color: red;
//   }
//   </style>
//   <body>

//   <p>
//   <button onclick="myMove()">Click Me</button> 
//   </p>

//   <div id ="myContainer">
//   <div id ="myAnimation"></div>
//   </div>

//   <script>
//   function myMove() {
//     var elem = document.getElementById("myAnimation");   
//     var pos = 0;
//     var id = setInterval(frame, 10);
//     function frame() {
//       if (pos == 350) {
//         clearInterval(id);
//       } else {
//         pos++; 
//         elem.style.top = pos + 'px'; 
//         elem.style.left = pos + 'px'; 
//       }
//     }
//   }