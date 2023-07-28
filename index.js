function calcular(){
  let KgElementy = document.getElementById('KG')

  let recipienteElementy = document.getElementById('recipiente')

  let UnidadesElemnty = document.getElementById('unidades-saco')

  let unidadescaixa = document.getElementById('unidades-caixa')

  let produto = document.getElementById('produto')

  let dividir = KgElementy.value / recipienteElementy.value

  let sacos = dividir / UnidadesElemnty.value

  let caixas = dividir / unidadescaixa.value

  let fardo = caixas / 20

  let containerResultados = document.getElementById('container-resultados')

  let resultado = document.getElementById('resultado')

  containerResultados.classList.remove("hide");

  resultado.innerHTML = `Produto = ${produto.value} <br> <br>  Quantidade de recipientes = ${dividir.toFixed(0)} recipientes <br> <br>  Quantidade de sacos = ${sacos.toFixed(0)} sacos <br> <br> Caixas = ${caixas.toFixed(0)} caixas <br> <br> Fardos = ${fardo.toFixed(0)} fardo `
}

function copiar() {
  let resultado = document.getElementById('resultado');
  let texto = resultado.innerHTML;
  texto = texto.replace(/<br>/g, '\n');
  navigator.clipboard.writeText(texto);
}
