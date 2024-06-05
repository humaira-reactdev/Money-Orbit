// ================VARIABLE DECLARATIONS===================//
let phoneNumber=document.querySelector('#phone')
let numberString=phoneNumber.value.toString()
let pin=document.querySelector('#pin')
let loginButton=document.querySelector('.loginButton')
let error=document.querySelector('.error')
let loginPage=document.querySelector('.loginPage')
let homepage=document.querySelector('.homepage')

// ================VARIABLE DECLARATIONS===================//

// ================LOGIN PART START===================//
loginButton.addEventListener('click',()=>{
    console.log(phoneNumber);
    if (phoneNumber.value==''|| pin.value==''){
        error.innerHTML="None of the fields can be empty"
    }
    else if (numberString.length<11){
        error.innerHTML="Please provide a proper phone number with 11 digits"
    }
    else{
        error.innerHTML=''
        loginPage.style='display:none'
        homepage.style='display:block'
    }
})

// ================LOGIN PART END===================//