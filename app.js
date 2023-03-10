let contador = 0;
let comida1, comida2, comida3;

function selectPrato(prato) {
    const prato1 = document.querySelector(".pratoSelecionado");

    if (prato1 !== null) {
        prato1.classList.remove("pratoSelecionado");
    }
    else
        contador++;

    prato.classList.toggle("pratoSelecionado");

    if (contador === 3) {
        document.querySelector("button").disabled = false;
        document.querySelector(".h11").classList.add("finalizado");
        document.querySelector(".h11").innerHTML = "Fechar pedido";
    }
    comida1 = prato;
};

function selecBebida(bebida) {
    const bebida1 = document.querySelector(".bebidaSelecionada");

    if (bebida1 !== null) {
        bebida1.classList.remove("bebidaSelecionada");
    }
    else
        contador++;

    bebida.classList.toggle("bebidaSelecionada");

    if (contador === 3) {
        document.querySelector("button").disabled = false;
        document.querySelector(".h11").classList.add("finalizado");
        document.querySelector(".h11").innerHTML = "Fechar pedido";
    }
    comida2 = bebida;
};

function selecSobremesa(sobremesa) {
    const sobremesa1 = document.querySelector(".sobremesaSelecionada");

    if (sobremesa1 !== null) {
        sobremesa1.classList.remove("sobremesaSelecionada");
    }
    else
        contador++;

    sobremesa.classList.toggle("sobremesaSelecionada");

    if (contador === 3) {
        document.querySelector("button").disabled = false;
        document.querySelector(".h11").classList.add("finalizado");
        document.querySelector(".h11").innerHTML = "Fechar pedido";
    }
    comida3 = sobremesa;
};

function zap() {

    let str = "https://wa.me/5531991099991?text=";

    let text1 = comida1.querySelector("h2").textContent;

    let text2 = comida2.querySelector("h2").textContent;

    let text3 = comida3.querySelector("h2").textContent;

    let num1 = comida1.querySelector("h3").textContent;
    num1 = num1.replace(",", ".");
    num1 = parseFloat(num1.slice(2, num1.length));

    let num2 = comida2.querySelector("h3").textContent;
    num2 = num2.replace(",", ".");
    num2 = parseFloat(num2.slice(2, num2.length));

    let num3 = comida3.querySelector("h3").textContent;
    num3 = num3.replace(",", ".");
    num3 = parseFloat(num3.slice(2, num3.length));

    str +=
        `Ol?? gostaria de fazer o pedido:\n- Prato: ${text1}\n- Bebida: ${text2}\n- Sobremesa: ${text3}\nTotal: R$ ${(num1 + num2 + num3).toFixed(2)}`;

    const link = encodeURI(str);

    const atributo = document.querySelector("a");
    atributo.setAttribute("href", `${link}`);
};