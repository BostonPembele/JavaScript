let num1;

document.getElementById("buttonInput").onclick = function(){
    num1 = document.getElementById("numberInput").value;

    console.log(num1);
    window.alert("The Number you entered was a " +num1);
    if(num1 % 2 ===0){
        document.getElementById("myP").innerHTML = num1 + " is an even number";
    } else {
        document.getElementById("myP").innerHTML = num1 + " is an odd number";
    }
}