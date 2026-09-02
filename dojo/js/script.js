function calcularMedia() {
    let n1 = parseFloat(document.getElementById('nota1').value) || 0;
    let n2 = parseFloat(document.getElementById('nota2').value) || 0;
    let n3 = parseFloat(document.getElementById('nota3').value) || 0;
    let n4 = parseFloat(document.getElementById('nota4').value) || 0;

    let vetorNotas = [n1, n2, n3, n4];

    let soma = vetorNotas[0] + vetorNotas[1] + vetorNotas[2] + vetorNotas[3];
    let media = soma / 4;

    let input1 = document.getElementById('nota1').value;
    let input2 = document.getElementById('nota2').value;
    let input3 = document.getElementById('nota3').value;
    let input4 = document.getElementById('nota4').value;

    if (input1 !== "" && input2 !== "" && input3 !== "" && input4 !== "") {
        document.getElementById('spanMedia').textContent = media.toFixed(2);
        
        localStorage.setItem('mediaAluno', media);
        localStorage.setItem('nomeAluno', document.getElementById('nome').value);
    } else {
        document.getElementById('spanMedia').textContent = "--";
    }
}

function validarFormulario(event) {
    let input1 = document.getElementById('nota1').value;
    let input2 = document.getElementById('nota2').value;
    let input3 = document.getElementById('nota3').value;
    let input4 = document.getElementById('nota4').value;

    if (input1 === "" || input2 === "" || input3 === "" || input4 === "") {
        alert("Por favor, preencha todas as 4 notas antes de continuar!");
        event.preventDefault();
        return false;
    }

    return true;
}
