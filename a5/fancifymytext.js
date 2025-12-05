function hello(){
    alert("Hello, world!");
}

function bigger(){
    document.getElementById("text").style.fontSize = "24px";
}

function fancy(){
    alert("Fancy!");
    document.getElementById("text").style.fontWeight = "bold";
    document.getElementById("text").style.color = "blue";
    document.getElementById("text").style.textDecoration = "underline";
}

function normal(){
    alert("Normal!");
    document.getElementById("text").style.fontSize = "12px";
    document.getElementById("text").style.fontWeight = "normal";
    document.getElementById("text").style.color = "black";
    document.getElementById("text").style.textDecoration = "none";
}

function moo(){
    line = document.getElementById("text").value;
    line = line.toUpperCase();
    var parts = line.split(".");
    document.getElementById("text").value = parts.join("-Moo.");
}