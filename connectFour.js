
var x=document.getElementById("background");
for(i=0;i<7;i++){
    let rectangle=document.createElement("div");
    rectangle.setAttribute("class","column");
    var columnId="column" + i;
    rectangle.setAttribute("id", columnId);

    x.appendChild(rectangle);

}

// var y=document.getElementById("column");
// for(j=0;j<6;j++){
//     let box=document.createElement("div");
//     box.setAttribute("class","square");
//     var squareId="square" + j;
//     box.setAttribute("id", squareId);

//     y.appendChild(squareId);

// }
    