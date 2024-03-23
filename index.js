const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const generateButton = document.getElementById("generate-button")
const chosenPass = document.getElementById("chosen-pass")
const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const lengthSet = document.getElementById("length-set")
const setLengthButton = document.getElementById("set-length-button")
const excludeCharactersInput = document.getElementById("exclude-character")
const excludeButton = document.getElementById("exclude-button")
const excludeContainer = document.getElementById("exclude-container")
const copyButton = document.getElementById("copy-button")

let pass1 = []
let pass2 = []
let excludeArray = []
let chosenLength
let defaultNum 

copyButton.addEventListener("click",function(){
    if(chosenPass.value){
        chosenPass.select()
        document.execCommand('copy')
    }
})
excludeButton.addEventListener("click",function(){
    if(excludeCharactersInput.value){
        for (let i = 0; i < excludeCharactersInput.value.length; i++) {
            
            let currentPick = excludeCharactersInput.value[i]
            if(!excludeArray.includes(currentPick)){
            excludeArray.push(currentPick)
        excludeContainer.innerHTML ="current characters excluded = " + excludeArray

            console.log(excludeArray) }else{
                continue
            }
        }
    }
    excludeCharactersInput.value = ""

})

setLengthButton.addEventListener("click",function(){
    if(lengthSet.value){
        chosenLength = lengthSet.value
        console.log(lengthSet.value.length)
    }
})

function chooseCharacter(pass){

    if(chosenLength){
        defaultNum = chosenLength
    }else{
        defaultNum = 15
    }
    pass1 = []
    pass2 = []

    while(pass.length <defaultNum){
        let selectedNum =  Math.floor(Math.random()*characters.length)
    let chosenCharacter = characters[selectedNum]
    if(!excludeArray.includes(chosenCharacter)){
    pass.push(chosenCharacter)}
    }
return pass

}

generateButton.addEventListener("click",function(){
    resetPasses()
    button1.innerText = chooseCharacter(pass1)
    console.log(pass1.length)
    button2.innerText = chooseCharacter(pass2)
})

button1.addEventListener("click",function(){
chosenPass.value = button1.innerText
})

button2.addEventListener("click",function(){
    chosenPass.value = button2.innerText
    })

function resetPasses(){
    button1.innerText = ""
  
    button2.innerText = ""
}