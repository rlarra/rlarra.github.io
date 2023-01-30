
document.getElementById("boton").style.fontSize = "12px";
document.getElementById("boton").style.color = "black";
document.getElementById("boton").style.backgroundColor = "skyblue"; 
document.getElementById("boton").style.backgroundPosition= "center"
document.getElementById('boton').onclick = function () {
    console.log("capturamos el evento click");
    document.getElementById("demo").innerHTML = "Juan Pablo Garcia / CEL: 15-5044-2233 / Tel: 4000-3050 /JP.Garcia@gmail.com"
}

document.getElementById("demo").style.fontSize = "35px";
document.getElementById("demo").style.color = "black";
document.getElementById("demo").style.backgroundColor = "auto"; 
document.getElementById("demo").style.textAlign= "center";