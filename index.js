const characters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0',
'1','2','3','4','5','6','7','8','9','~','!','#','$','%','-','_','/','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r',
's','t','u','v','w','x','y','z']

let randomPassword = document.getElementById("random-password")
//console.log(randomPassword)
let clickBtn = document.getElementById("click-btn")
//console.log(clickBtn)

clickBtn.addEventListener ('click', function(){
    
let randomIndexOne = Math.floor (Math.random() * characters.length)
let randomIndexTwo = Math.floor (Math.random() * characters.length)
let randomIndexThree = Math.floor (Math.random() * characters.length)
let randomIndexFourth= Math.floor (Math.random() * characters.length)

randomPassword.textContent= (characters[randomIndexOne] + characters[randomIndexTwo] + characters[randomIndexThree]+characters[randomIndexFourth])
});

