function completarEstados() {
    const estadosSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( dados => dados.json() )
    .then( estados => {

        for( const estado of estados ) {
            estadosSelect.innerHTML += `<option value="${estado.id}">${estado.nome}</option>`
        }

    })
}

completarEstados()

function pegarCidades(e){
    const cidadesSelect = document.querySelector("select[name=cidade]")

    const estadoInput = document.querySelector("input[name=estado")
    
    const estadoValue = e.target.value

    var indexEstado = e.target.selectedIndex

    estadoInput.value = e.target.options[indexEstado].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoValue}/municipios`

    cidadesSelect.innerHTML = "<option>Selecione a cidade</option>"
    cidadesSelect.disabled = true;

    fetch(url)
    .then( dados => dados.json() )
    .then( cidades => {

        for( const cidade of cidades ) {
            cidadesSelect.innerHTML += `<option value="${cidade.nome}">${cidade.nome}</option>`
        }

        cidadesSelect.disabled = false;
    })
}

document
    .querySelector("select[name=uf]")
    .addEventListener("change", pegarCidades)


// ---------------------------------- COLETA ------------------------------- //

