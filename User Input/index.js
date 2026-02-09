//The Easy Way

//let username;
//username = window.prompt("what is your name");
//console.log("Hello " +username);
//document.getElementById("myH1").textContent = "Greetings " +username;

//The professional way

let username;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("username").value;
    document.getElementById("myH1").textContent = "Hello " +username; 
    
}