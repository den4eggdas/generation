const password = document.querySelector('.password');
const random = document.querySelector('.random');
const text = [ 'a','b', 'c','d','e','f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const TEXT = ['A', 'B','C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const numbers = ['0', '1', '2', '3','4','5','6','7','8','9']
const symbols = ['`', '!', '#', '$', '%', '^', '&', '*', '(', ')', '/', '?', '~', '@', '-', '_', '+', '=', '{', '}', '[', ']', '|', ':', ';', '"', '<', '>', ',' , '.']
const copy = document.querySelector ('.copy')
const radioCAPS = document.getElementById('radioLETTER')
const radioLet = document.getElementById('radioLet')
const radioNum = document.getElementById ('radioNUMBER')
let copyMessage = document.querySelector('.copyMessage')
let rangePass = document.querySelector ('#rangePass')
let rangeValue = document.querySelector ('#rangeValue')
const symbol = document.getElementById ('radioSymbol')
let gotov = ''
const setTing = document.querySelector ('.setTing')


rangeValue.textContent = rangePass.value

rangePass.addEventListener ('input', () => {
    rangeValue.textContent = rangePass.value
}
)


copy.addEventListener ('click', () => 
{
    if (password.value != '') {
    navigator.clipboard.writeText(password.value)
    .then(() => {
        copyMessage.innerHTML = 'Скопировано'
        copy.style.backgroundColor = 'blue';
        setTimeout(() => {
            copyMessage.textContent ='Скопировать';
            copy.style.backgroundColor = '';
            
        }, 2000 ) 
    } )
} else {
    random.style.border = '2px solid red'
    random.style.fontSize = '15px'
    
    setTimeout (() => {
        random.style.border = ''
        random.style.fontSize = ''
    }, 500)
}
})

random.addEventListener ('click', () => {
    passGen = ''
    const passLength = parseInt(rangePass.value)
    for (let i = 0; i < passLength; i++){
        const options = []
        if (radioCAPS.checked) {
            options.push(TEXT)
            
        } if (symbol.checked) {
            options.push(symbols)
        } if (radioNum.checked) {
            options.push(numbers)
        } if (radioLet.checked) {
            options.push(text)
        } if (options.length === 0) {
            setTing.style.color = 'red'
            setTing.style.fontSize = '25px'
            
            setTimeout (() => {
                setTing.style.color = ''
                setTing.style.fontSize = ''
            }, 500)
        }   

        const randomOption = options[Math.floor(Math.random()* options.length) ]
        passGen += randomOption[Math.floor(Math.random() * randomOption.length)]

        
    }
    password.value = passGen
})

