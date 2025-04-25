document.getElementById('btn-acessibilidade').addEventListener('click', function() {
    const botoesAcessibilidade = document.getElementById('botoes-acessibilidade');
    botoesAcessibilidade.style.display = botoesAcessibilidade.style.display === 'none' ? 'block' : 'none';
});

let fontSize = 20; 
const fontSizeMin = 16; 
const fontSizeMax = 27; 


function atualizarFonte() {
    document.body.style.fontSize = fontSize + 'px';
}

// Aumentar a fonte
document.getElementById('btn-aumentar').addEventListener('click', function() {
    if (fontSize < fontSizeMax) {
        fontSize += 2; 
        atualizarFonte(); 
    }
});

// Diminuir a fonte
document.getElementById('btn-diminuir').addEventListener('click', function() {
    if (fontSize > fontSizeMin) {
        fontSize -= 2; 
        atualizarFonte(); 
    }
});

atualizarFonte();

let textoBranco = false;

document.getElementById('btn-mudar-cor').addEventListener('click', function() {
    
    textoBranco = !textoBranco; 

    if (textoBranco) {
        
        document.querySelectorAll('body *:not(#contato):not(#contato *)').forEach(function(el) {
            el.style.color = '';
        });
    } else {
        
        document.querySelectorAll('body *:not(#contato):not(#contato *)').forEach(function(el) {
            el.style.color = 'white'; 
        });
    }
});
