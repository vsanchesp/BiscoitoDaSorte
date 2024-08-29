let phrases = [
    'A vida trará coisas boas se tiver paciência',
    'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si',
    'Não compense na ira o que lhe falta na razão',
    'Defeitos e virtudes são apenas dois lados da mesma moeda',
    'A maior de todas as torres começa no solo.',
    'Não há que ser forte. Há que ser flexível',
    'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?',
    'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
    'A juventude não é uma época da vida, é um estado de espírito.',
    'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.',
    'Siga os bons e aprenda com eles.',
    'Dê toda a atenção á formação dos seus filhos, sobretudo com bons exemplos da sua própria vida.',
    'Não importa o tamanho da montanha, ela não pode tapar o sol.',
    'O bom-senso vale mais do que muito conhecimento.',
    

];

let phrasesrandom = phrases[Math.round(Math.random() * (phrases.length - 1))]



const btn1 = document.querySelector("#btn1")
const btn2 = document.querySelector("#btn2")
const p = document.querySelector("#frasesorte")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const tremidinha1 = document.querySelector(".tremidinha1")
const tremidinha2 = document.querySelector(".tremidinha2")


tremidinha2.classList.remove("tremidinha2")

btn1.addEventListener('click', (event)=>{
event.preventDefault()

tremidinha2.classList.add("tremidinha2")

setTimeout(()=>{
screen1.classList.add("hide")
screen2.classList.remove("hide")}, 900)


p.innerText = `${phrasesrandom}`


})

btn2.addEventListener('click', (event)=>{
    event.preventDefault()
    screen1.classList.remove("hide")
    screen2.classList.add("hide")
    tremidinha2.classList.remove("tremidinha2")

    phrasesrandom = phrases[Math.round(Math.random() * (phrases.length - 1))]
})