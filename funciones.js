var valorInicial;
var cadena;
var cadenaDevuelta = "";
var posicion;
var codigoUnicode;
var chino;
var tecla;

var select = document.getElementById("valorEntrada");
select.addEventListener("keyup",
    function traducir(){

        cadena = document.getElementById("valorEntrada").value;

            posicion = cadena.length - 1;
            valorInicial = cadena.charAt(posicion);
            codigoUnicode = cadena.charCodeAt(posicion);
            var codigoStr= ""+codigoUnicode;

            if (codigoStr != "NaN"){
                console.log(codigoUnicode);
                console.log("ENTRA");
                chino = unescape("%u" + codigoUnicode + "e8");
                cadena = cadena.substring(0, cadena.length - 1);
                cadena = cadena + chino;

                document.getElementById("valorEntrada").value = cadena;

                cadenaDevuelta = cadenaDevuelta + '<br> ---------------------------------'+
                                                  '<br> Tipo de evento: keyup'+
                                                  '<br> Propiedad keyCode: '+codigoUnicode+
                                                  '<br> Carácter pulsado: '+valorInicial;
                rellenarInfo();
            }
},false);

function rellenarInfo(){
    document.getElementById("info").innerHTML = cadenaDevuelta;
}
