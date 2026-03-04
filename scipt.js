console.log("Script started");
function changeStyle(){
    console.log("click");
    let p = document.getElementById("text");
    p.innerText = "The text has been changed";
    p.style.color = "red";
    p.style.fontSize = "100px";
    p.style.border = "2px solid green";
}

function resetStyle(){
    console.log("click");
    let p = document.getElementById("text");
    p.innerText = "This is some sample text";
    p.style.color = "";
    p.style.fontSize = "";
    p.style.border = "";
}

function changeStyle2(){
    console.log("click");
    let p = document.getElementById("text");
    p.style.color = "blue";
    p.style.fontSize = "50px";
    p.style.border = "4px solid purple";
    p.style.borderRadius = "10px"
}