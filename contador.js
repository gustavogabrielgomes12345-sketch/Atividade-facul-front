function contar() {
    
    let ini = document.getElementById('txtInicio');
    let fim = document.getElementById('txtFim');
    let passo = document.getElementById('txtPasso');
    let res = document.getElementById('displayResultado');

    
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
  
        res.innerHTML = `
            <div class="alert alert-danger border-0 border-start border-4 border-danger shadow-sm d-flex align-items-center" role="alert">
                <div class="fw-bold">
                    <span class="fs-4 me-2">⚠️</span> 
                    [ERRO] Faltam dados! Por favor, informe os 3 valores (Início, Fim e Passo).
                </div>
            </div>`;
        return; 
    }


    let i = Number(ini.value);
    let f = Number(fim.value);
    let p = Number(passo.value);

    
    if (p <= 0) {
        p = 1;
       
    }

    res.innerHTML = '<h6 class="text-uppercase fw-bold mb-3">Resultado:</h6>'; 


    if (i < f) {
       
        for(let c = i; c <= f; c += p) {
            res.innerHTML += ` ${c} \u{27A1} `;
        }
    } else {
    
        for(let c = i; c >= f; c -= p) {
            res.innerHTML += ` ${c} \u{27A1} `;
        }
    }
    
    res.innerHTML += ` \u{1F3C1} `; 
}

