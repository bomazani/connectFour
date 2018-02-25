
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
// console.log(background);
// console.log(columnPlacement);
let column0 = document.getElementById("column-0");
    // console.log(column0);




function clickEvent(event) {
    const column = event.currentTarget;
    // separates the column id numeral //
    const columnIndex = column.id.split('-')[1];
    const squaresInColumn = document.querySelectorAll(`#${column.id} .square`);
    const squareCountInColumn = squaresInColumn.length;


    console.log(column0);
    // console.log(columnIndex);
    // console.log(squareCountInColumn);

// ...

   
// create a new div whenever and wherever a click occurs //
        let box=document.createElement("div");
        box.classList.add("square")
        box.classList.add(currentPlayerPiece);
        let j=(squareCountInColumn);
        // console.log(j);  
        let squareId="square" + j;
    // unsuccessful attempt to limit the number of divs to 6 per column. //
    // received an "illegal break" message. //
        // if (squareId>6){
        //     break;
        // }

        // console.log(squareId);
        box.id=squareId;
        column.appendChild(box);

    // Determine if a winner exists //
    // Step 1: Singling out and searching each column //
        
        for (let k=0; k<7; k++){
            let searchedColumn = "column-" + k;
            let childCount = searchedColumn.document;
            // console.log(childCount);
            // console.log(column);
            console.log(column0[k]);
            console.log(column0.length);
        
        }


// alternate class attributes //
    let playerPieceTemporaryHolder=currentPlayerPiece;
    currentPlayerPiece=nextPlayerPiece;
    nextPlayerPiece=playerPieceTemporaryHolder;
  
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