const displayvalue= document.getElementById("display");

function display(input){
    displayvalue.value +=input;
}
function cleardisplay(input){
    displayvalue.value ="";
}
function calculate(input){
    try{
    displayvalue.value =eval(displayvalue.value);}
    catch(error){
        displayvalue.value="error";
    }
}