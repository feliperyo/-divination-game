const sortNumber = Math.floor(Math.random() * (11 - 1 + 1))

const button1 = document.querySelector('.button1')
const button2 = document.querySelector('.button2')
const button3 = document.querySelector('.button3')

const p = document.querySelector('p')

const quadrado1 = document.querySelector('.img-quadrado1')
const quadrado2 = document.querySelector('.img-quadrado2')
const quadrado3 = document.querySelector('.img-quadrado3')

const choiceNumber1 = document.querySelector('.choice1')
const choiceNumber2 = document.querySelector('.choice2')
const choiceNumber3 = document.querySelector('.choice3')

console.log(sortNumber)


function compareNumber1() {

    if (choiceNumber1.value == sortNumber) {
        p.innerHTML = "Parabéns, você acertou de primeira!"
        quadrado1.src = "./assets/quadrado-J.png"
    }
    else {
        p.innerHTML = `Você tentou ${choiceNumber1.value} e errou, sobraram 2 tentativas:`
        quadrado1.src = "./assets/quadrado-x.png";
        choiceNumber1.disabled = true;
        button1.disabled = true;
        choiceNumber2.disabled = false;
        button2.disabled = false;
    }
}

function compareNumber2() {
    if (choiceNumber2.value == sortNumber) {
        p.innerHTML = "Parabéns, você acertou na segunda chance!"
        quadrado2.src = "./assets/quadrado-J.png"
    }
    else {
        p.innerHTML = `Você tentou ${choiceNumber2.value} e errou, sobrarou 1 tentativa:`
        quadrado2.src = "./assets/quadrado-x.png";
        choiceNumber2.disabled = true;
        button2.disabled = true;
        choiceNumber3.disabled = false;
        button3.disabled = false;
    }
}

function compareNumber3() {
    if (choiceNumber3.value == sortNumber) {
        p.innerHTML = "Parabéns, você acertou na última chance!<br> Atualize a página para jogar de novo"
        quadrado3.src = "./assets/quadrado-J.png"
    }
    else {
        p.innerHTML = `Infelizmente você perdeu, pensei no número ${sortNumber}.<br> Atualize a página e tente novamente`
        quadrado3.src = "./assets/quadrado-x.png";
        choiceNumber3.disabled = true;
        button3.disabled = true;
    }
}

button1.addEventListener("click", compareNumber1)
button2.addEventListener("click", compareNumber2)
button3.addEventListener("click", compareNumber3)