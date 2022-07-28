let btnDatos = document.getElementById("btnDatos");
btnDatos.addEventListener("click",motrarDatos);

function motrarDatos(){
    let inputNombre = document.getElementById("inputNombre").value;
    let inputApellido = document.getElementById("inputApellido").value;
    let inputEdad = document.getElementById("inputEdad").value;

    alert(" Nombre: "+inputNombre+ "\n Apellido: "+inputApellido+"\n Edad: "+inputEdad+" años");

}