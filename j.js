let buttons = document.querySelectorAll('.buts');
let clickTimeout;  
let passLength = 4
let passLowercase = true
let passUpperCase = false
let passNumbers = false
let passChar = false
window.onload = () => {
    setlength.innerHTML = "length: "+passLength
    setSmall.innerHTML = "lowercase characters: "+(passLowercase == true ? "ON" : "OFF")
    setBig.innerHTML = "uppercase characters: "+(passUpperCase == true ? "ON" : "OFF")
    setNum.innerHTML = "numbers: "+(passNumbers == true ? "ON" : "OFF")
    setChar.innerHTML = "characters: "+(passChar == true ? "ON" : "OFF")
}

const passMaker = (len,lower,upper,num,char)=>{
    let order = []
    let lowerCase = "abcdefghijklmnopqrstuvwxyz"
    let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let nums = "1234567890"
    let chars = "!@#$%^&*()"

    lower?order.push("lower"):null
    upper?order.push("upper"):null
    num?order.push("nums"):null
    char?order.push("chars"):null

    // Math.floor(Math.random() * 100) + 1;  
    password.innerHTML = ""
    len--
    let fr = setInterval(()=>{
        len==0?clearInterval(fr):len--
        let thing = Math.floor(Math.random() * order.length)
        order[thing] == "lower"? password.innerHTML+=lowerCase[Math.floor(Math.random() * 26)]
        :order[thing] == "upper"? password.innerHTML+=upperCase[Math.floor(Math.random() * 26)] 
        :order[thing] == "nums"? password.innerHTML+=nums[Math.floor(Math.random() * 10)] 
        :order[thing] == "chars"? password.innerHTML+=chars[Math.floor(Math.random() * 10)] : ""
    },5*len)
        
}

setlength.addEventListener('click',()=>{
    if(passLength == 4){
        passLength = 5
    }
    else if(passLength == 5){
        passLength = 7
    }
    else if(passLength == 7){
        passLength = 9
    }
    else if(passLength == 9){
        passLength = 10
    }
    else if(passLength == 10){
        passLength = 12
    }
    else{passLength = 5}
})
setSmall.addEventListener('click',()=>{
    if(passLowercase){passLowercase = false}
    else{passLowercase = true}
})
setBig.addEventListener('click',()=>{
    if(passUpperCase){passUpperCase = false}
    else{passUpperCase = true}

})
setNum.addEventListener('click',()=>{
    if(passNumbers){passNumbers = false}
    else{passNumbers = true}
})
setChar.addEventListener('click',()=>{
    if(passChar){passChar = false}
    else{passChar = true}
})

for (const i of buttons) {
    i.addEventListener('click',()=>{
        setlength.innerHTML = "length: "+passLength
        setSmall.innerHTML = "lowercase characters: "+(passLowercase == true ? "ON" : "OFF")
        setBig.innerHTML = "uppercase characters: "+(passUpperCase == true ? "ON" : "OFF")
        setNum.innerHTML = "numbers: "+(passNumbers == true ? "ON" : "OFF")
        setChar.innerHTML = "characters: "+(passChar == true ? "ON" : "OFF")
        passMaker(passLength,passLowercase,passUpperCase,passNumbers,passChar)
    })
}
passHolder.oncontextmenu = (e)=>{
    e.preventDefault()
    navigator.clipboard.writeText(password.innerHTML)  
    .then(() => {  
        password.innerHTML = 'Text copied to clipboard!';  
    })  
    .catch(err => {  
        console.error('Failed to copy: ', err);  
    });  
}
passHolder.addEventListener('click', function() {  

    if (clickTimeout) {  
        clearTimeout(clickTimeout);  
        clickTimeout = null;  
        return; 
    }  
    clickTimeout = setTimeout(function() {  
        console.log('Single click detected!');  
        passMaker(passLength,passLowercase,passUpperCase,passNumbers,passChar)
        clickTimeout = null; 
    }, 250); 
});  
passHolder.addEventListener('dblclick', function(e) {  
    clearTimeout(clickTimeout);  
    clickTimeout = null; 
    console.log('Double click detected!');  
    e.preventDefault()
    navigator.clipboard.writeText(password.innerHTML)  
    .then(() => {  
        password.innerHTML = 'Text copied to clipboard!';  
    })  
    .catch(err => {  
        console.error('Failed to copy: ', err);  
    });  
});  
