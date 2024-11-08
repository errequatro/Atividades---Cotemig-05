function receber_nome() {
    var nome = document.getElementById("name").value
    localStorage.setItem("name", nome)
}

function receber_addres() {
    var addres = document.getElementById("addres").value
    localStorage.setItem("addres", addres)
}

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

    if (tel_formatado[4] != " ") {
        if (tel_formatado[4] != undefined) {
            document.getElementById("telefone").value = tel_formatado.slice(0, 4) + " " + tel_formatado[4];
        }
    }

    if (tel_formatado[5] != "9") {
        if (tel_formatado[5] != undefined) {
            document.getElementById("telefone").value = tel_formatado.slice(0, 5) + "9" + tel_formatado[5];
        }
    }

    if (tel_formatado[10] != "-") {
        if (tel_formatado[10] != undefined) {
            document.getElementById("telefone").value = tel_formatado.slice(0, 10) + "-" + tel_formatado[10];
        }
    }

    localStorage.setItem("tel", tel_formatado)
}

function mascara_cep() {

    var cep_formatado = document.getElementById("cep").value
    if (cep_formatado[2] != ".") {
        if (cep_formatado[2] != undefined) {
            document.getElementById("cep").value = cep_formatado.slice(0, 2) + "." + cep_formatado[2];
        }
    }

    if (cep_formatado[6] != "-") {
        if (cep_formatado[6] != undefined) {
            document.getElementById("cep").value = cep_formatado.slice(0, 6) + "-" + cep_formatado[6];
        }
    }

    localStorage.setItem("cep", cep_formatado)
}

function mascara_cpf() {

    var cpf_formatado = document.getElementById("cpf").value
    if (cpf_formatado[3] != ".") {
        if (cpf_formatado[3] != undefined) {
            document.getElementById("cpf").value = cpf_formatado.slice(0, 3) + "." + cpf_formatado[3];
        }
    }

    if (cpf_formatado[7] != ".") {
        if (cpf_formatado[7] != undefined) {
            document.getElementById("cpf").value = cpf_formatado.slice(0, 7) + "." + cpf_formatado[7];
        }
    }

    if (cpf_formatado[11] != "-") {
        if (cpf_formatado[11] != undefined) {
            document.getElementById("cpf").value = cpf_formatado.slice(0, 11) + "-" + cpf_formatado[11];
        }
    }

    localStorage.setItem("cpf", cpf_formatado)
}

function mascara_cnpj() {

    var cnpj_formatado = document.getElementById("cnpj").value
    if (cnpj_formatado[2] != ".") {
        if (cnpj_formatado[2] != undefined) {
            document.getElementById("cnpj").value = cnpj_formatado.slice(0, 2) + "." + cnpj_formatado[2];
        }
    }

    if (cnpj_formatado[6] != ".") {
        if (cnpj_formatado[6] != undefined) {
            document.getElementById("cnpj").value = cnpj_formatado.slice(0, 6) + "." + cnpj_formatado[6];
        }
    }

    if (cnpj_formatado[10] != "/") {
        if (cnpj_formatado[10] != undefined) {
            document.getElementById("cnpj").value = cnpj_formatado.slice(0, 10) + "/" + cnpj_formatado[10];
        }
    }

    if (cnpj_formatado[15] != "-") {
        if (cnpj_formatado[15] != undefined) {
            document.getElementById("cnpj").value = cnpj_formatado.slice(0, 15) + "-" + cnpj_formatado[15];
        }
    }

    localStorage.setItem("cnpj", cnpj_formatado)
}

function mascara_code() {
    var code_formatado = document.getElementById("code").value
    if (code_formatado[2] != "_"){
        if (code_formatado[2] != undefined){
            document.getElementById("code").value = code_formatado.slice(0,2) + "_" + code_formatado[2];
        }
    }

    if (code_formatado[5] != "/"){
        if (code_formatado[5] != undefined){
            document.getElementById("code").value = code_formatado.slice(0,5) + "/" + code_formatado[5];
        }
    }

    if (code_formatado[6] != "/"){
        if (code_formatado[6] != undefined){
            document.getElementById("code").value = code_formatado.slice(0,6) + "/" + code_formatado[6];
        }
    }

    if (code_formatado[10] != "-"){
        if (code_formatado[10] != undefined){
            document.getElementById("code").value = code_formatado.slice(0,10) + "-" + code_formatado[10];
        }
    }

    if (code_formatado[14] != "."){
        if (code_formatado[14] != undefined){
            document.getElementById("code").value = code_formatado.slice(0,14) + "." + code_formatado[14];
        }
    }

    if (code_formatado[16] != "."){
        if (code_formatado[16] != undefined){
            document.getElementById("code").value = code_formatado.slice(0,16) + "." + code_formatado[16];
        }
    }

    localStorage.setItem("code", code_formatado)
}