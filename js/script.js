// Selcao de elementos
const generatePasswordButton = document.querySelector('#generate-password');
const generatePasswordElement = document.querySelector('#generated-password');

//funções
const getLetterLowerCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getLetterUpperCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const getNumber = () => {
    return Math.floor(Math.random() * 10).toString();
};

const getSymbol = () => {
    const symbols = '!@#$%*?_.';
    return symbols[Math.floor(Math.random() * symbols.length)];
}

const generatePassword = (getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol) => {

    let password = ""

    const passwordLength = 10 

    const generators = [
        getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSymbol
    ]
    
    for(i = 0; i < passwordLength; i = i + 4){
        generators.forEach(() => {

            const randomValue = generators[Math.floor(Math.random() * generators.length)]();

            password +=  randomValue;
        });
    }

    password =  password.slice(0, password.length);
    
    generatePasswordElement.style.display = "block"
    generatePasswordElement.querySelector("button").innerText = password;
};

function copyToClipboard(){
    navigator.clipboard.writeText(document.getElementById("output").innerHTML).then(() => {
        alert('copiado')
    })
}

//eventos
generatePasswordButton.addEventListener("click", () => {
    generatePassword(
        getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSymbol
    );
});