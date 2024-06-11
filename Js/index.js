let signName = document.querySelector('#signName')
let signEmail = document.querySelector('#signEmail')
let signPassword  = document.querySelector('#signPassword')
let signBtn = document.querySelector('#signBtn')
let exist = document.querySelector('#exist')
let signInEmail = document.querySelector('#signInEmail')
let signInPass = document.querySelector('#signInPass')
let logBtn = document.querySelector('#logBtn')
let check = document.querySelector('#check')
let userInfo = []

if (JSON.parse(localStorage.getItem('infoMore')) != null){
    userInfo = JSON.parse(localStorage.getItem('infoMore'))
}

 
function signUp(){
    if (signName.value == '' || signEmail.value == '' || signPassword.value == '' ){
        exist.innerHTML = `<span class="text-danger my-3">Inputs are required</span>`
    }else {
        for (let i = 0; i < userInfo.length; i++) {
            if(userInfo[i].email.toLowerCase() == signEmail.value.toLowerCase()){
                exist.innerHTML = `<span class="text-danger my-3">Email exist</span>`
                return false
            }
        }
        displayData()
        exist.innerHTML = `<span class="text-success my-3">Success</span>`
    }
}

function displayData(){
    let user = {
        name:signName.value,
        email:signEmail.value,
        pass : signPassword.value
    }
    userInfo.push(user)
    localStorage.setItem('infoMore',JSON.stringify(userInfo))
    location.href = '/index.html'
}


signBtn?.addEventListener('click',function(){
    signUp()
})






function signIn(){
    if ( signInEmail.value == '' || signInPass.value == '' ) {
        check.innerHTML = `<span class="text-danger my-3">All inputs are required</span>`
    }else {
        for (let i = 0; i < userInfo.length; i++) {
            if(signInEmail.value.toLowerCase() == userInfo[i].email.toLowerCase() && signInPass.value == userInfo[i].pass){
                check.innerHTML = `<span class="text-success my-3">success</span>`
                localStorage.setItem('userName',JSON.stringify(userInfo[i].name))
                location.href = '/home.html'
                return
            }
        }   
        check.innerHTML = `<span class="text-danger my-3">You must sign up</span>`
    }
}

logBtn.addEventListener('click',function(){
    signIn()
})


let mainHome = document.querySelector('#home')
let login = localStorage.getItem('userName')

mainHome.innerHTML = `<h2 class="text-dark">Welcome ${login}</h2>`