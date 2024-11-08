addEventListener("DOMContentLoaded", ()=>{
    var name_recebido = localStorage.getItem("name")
    document.getElementById("name").value = name_recebido;

    var addres_recebido = localStorage.getItem("addres")
    document.getElementById("addres").value = addres_recebido;

    var tel_recebido = localStorage.getItem("tel")
    document.getElementById("telefone").value = tel_recebido;

    var cep_recebido = localStorage.getItem("cep")
    document.getElementById("cep").value = cep_recebido;

    var cpf_recebido = localStorage.getItem("cpf")
    document.getElementById("cpf").value = cpf_recebido;

    var cnpj_recebido = localStorage.getItem("cnpj")
    document.getElementById("cnpj").value = cnpj_recebido;

    var code_recebido = localStorage.getItem("code")
    document.getElementById("code").value = code_recebido;
})