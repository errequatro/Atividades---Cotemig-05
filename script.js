function mascara_telefone() {

    var tel_formatado = document.getElementById("telefone").value
    if (tel_formatado[0] != "(") {
        document.getElementById("telefone").value = "(" + tel_formatado[0];
    }

    if (tel_formatado[3] != ")") {
        if (tel_formatado[3] != undefined) {
            document.getElementById("telefone").value = tel_formatado.slice(0, 3) + ")" + tel_formatado[3];
        }
    }

    if (tel_formatado[4] != "9") {
        if (tel_formatado[4] != undefined) {
            document.getElementById("telefone").value = tel_formatado.slice(0, 4) + "9" + tel_formatado[4];
        }
    }

    if (tel_formatado[9] != "-") {
        if (tel_formatado[9] != undefined) {
            document.getElementById("telefone").value = tel_formatado.slice(0, 9) + "-" + tel_formatado[9];
        }
    }
}

function mascara_cep() {

    var cep_formatado = document.getElementById("cep").value
    if (cep_formatado[2] != "."){
        if (cep_formatado[2] != undefined){
            document.getElementById("cep").value = cep_formatado.slice(0,2) + "." + cep_formatado[2];
        }
    }

    if (cep_formatado[6] != "."){
        if (cep_formatado[6] != undefined){
            document.getElementById("cep").value = cep_formatado.slice(0,6) + "-" + cep_formatado[6];
        }
    }
}