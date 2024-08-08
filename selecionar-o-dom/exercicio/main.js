// Retorne no console todas as imagens do site
const imgAll = document.querySelectorAll('img')
console.log(imgAll)
// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagem = document.querySelectorAll('img[src^="img/imagem"]')
console.log(imagem)
// Selecione todos os links internos (onde o href começa com #)
const links = document.querySelectorAll('[href^="#"]')
console.log(links)
// Selecione o primeiro h2 dentro de .animais-descricao
const h2Animais = document.querySelector('.animais-descricao h2')
console.log(h2Animais)
// Selecione o último p do site
const paragrafos = document.querySelectorAll('p');

console.log(paragrafos[paragrafos.length - 1])

