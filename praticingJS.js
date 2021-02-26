let array = []
function start(){
    for (let value = 0; array.length < 50; value++) {
        array.push(value+1)
        let html = document.querySelector('ul').appendChild(document.createElement('li'))
        html.innerHTML = `${array[value]}Kg de Arroz que tá caro`
    }
    return array
}
function deleteButton() {
        array.pop()
        document.querySelector('ul').removeChild(document.querySelector('ul').lastChild)
        return array
}
