let colorText = document.getElementById("text-change-color");
let funT = document.getElementById("fun-text");

let colorIndex = 0;
let colorIndexTitle = 0;
let colorsArr = ["#41ead4","#fbff12"," #ff206e"];

//change hi5cc colors
function changeColorFn(){
    if(colorIndex > colorsArr.length - 1){
        colorIndex = 0;
    }
    colorText.style.color = colorsArr[colorIndex];
    colorIndex++;   
}

setInterval(changeColorFn, 500);


//change function() arguments changing
let counter = 0;
let parametersArray = ["","val","100, 20, true", "otherFunction-ABC","🧠,42"];
function modifyFunctionText(){
    funT.innerText = "function nameHere("+parametersArray[counter]+")";
    counter++;
    if(counter > parametersArray.length - 1){
        counter = 0;
    }
}

setInterval(modifyFunctionText, 1500);
