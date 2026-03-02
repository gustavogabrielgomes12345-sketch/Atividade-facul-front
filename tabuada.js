function gerarTabuada() {
    let numInput = document.getElementById('txtNum');
    let tabela = document.getElementById('corpoTabuada');

    // 1. Validação: Campo vazio
    if (numInput.value.length == 0) {
        alert("Por favor, digite um número!");
        return;
    }

    let n = Number(numInput.value);

    // 2. Validação: Bloqueio de números negativos
    if (n < 0) {
        alert("Erro: Por favor, digite apenas números positivos!");
        numInput.value = ""; // Limpa o campo do usuário
        tabela.innerHTML = '<tr><td colspan="4" class="text-danger fw-bold">Não é possível calcular números negativos.</td></tr>';
        return;
    }

    tabela.innerHTML = ""; // Limpa a tabela anterior

    // 3. Laço FOR para gerar a tabuada
    for (let i = 1; i <= 10; i++) {
        let linha = document.createElement('tr');

        let soma = `${n} + ${i} = <strong>${n + i}</strong>`;
        let sub  = `${n + i} - ${n} = <strong>${i}</strong>`;
        let mult = `${n} x ${i} = <strong>${n * i}</strong>`;
        let div  = `${(n * i).toFixed(0)} ÷ ${n} = <strong>${i}</strong>`;

        linha.innerHTML = `
            <td>${soma}</td>
            <td>${sub}</td>
            <td>${mult}</td>
            <td>${div}</td>
        `;
        tabela.appendChild(linha);
    }
}