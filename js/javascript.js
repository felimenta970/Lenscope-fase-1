/* 
Em uma compra online, o usuário insere informações de sua receita oftálmica, e nosso sistema deve exibir uma lente que atende a sua necessidade. Precisamos captar 4 parâmetros numéricos do usuário. São eles: grau esférico do olho esquerdo, grau esférico do olho direito, grau cilíndrico do olho esquerdo e grau cilíndrico do olho direito. 

A lente Prime só pode ser uma opção para o usuário que tiver grau esférico, seja do olho esquerdo ou do olho direito, entre -3 e -12. Além disso, ela só atende até grau cilíndrico -2, porém, se o usuário apresentar grau cilíndrico, ela passa a atender grau esférico entre -3 e -10. Já a lente Vision é uma opção para quem tem de 0 a -15 de esférico e até -5 de cilíndrico. Quando a lente Prime está disponível, ela deve ser a única exibida para o usuário. 

OBS: O grau limite que o usuário pode inserir é de 0 a -15 para esférico e -6 para cilíndrico e são números iterados de 0,25 em 0,25 (ex: -0,25; 0; +0,25; etc) *
*/

// Arredonda para o 0.25 mais próximo
function arredonda(num) {
    return Math.round(num*4)/4;
}

// Funções para mostrar o resultado
function isPrime(){
    document.getElementById("isPrime").style.display = "block";
}

function isVision() {
    document.getElementById("isVision").style.display = "block";
}

// Função principal para verificar qual lente
function verificaLente() {
    let esqEsferico, dirEsferico, esqCilindrico, dirCilindrico;

    // Obtemos os valores colocados
    esqEsferico = arredonda(document.getElementById("esqEsferico").value);
    dirEsferico = arredonda(document.getElementById("dirEsferico").value);


    esqCilindrico = arredonda(document.getElementById("esqCilindrico").value);
    dirCilindrico = arredonda(document.getElementById("dirCilindrico").value);


    if (esqCilindrico == 0 && dirCilindrico == 0){
        // Se não tem grau no cilíndrico
        if (esqEsferico >= -12 && esqEsferico <= -3 && dirEsferico >= -12 && dirEsferico <= -3) {
            // Caso seja no espaço entre -3 e -12, temos lentes Prime
            isPrime();
        }

        if (esqEsferico >= -3 || dirEsferico >= -3) {
            // Se tivermos menos que -3 no Esférico, lentes Vision
            isVision();
        }

    } else {

        if (esqCilindrico >= -2 && dirCilindrico >= -2) {
            // Se for até -2 no Cilindrico
            if (esqEsferico >= -10 && esqEsferico <= -3 && dirEsferico >= -10 && dirEsferico <= -3) {
                // Se for entre -3 e -10 no esférico, Prime
                isPrime();

            } else {
                // Se não, Vision
                isVision();
            }

        }

        else {
            if (esqCilindrico >= -5 && dirCilindrico >= -5) {
                // Se for outro valor, Vision
                isVision();
            }
        }
    }
}