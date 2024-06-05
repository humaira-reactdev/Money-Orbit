// ================VARIABLE DECLARATIONS===================//

// login page variables start
let phoneNumber=document.querySelector('#phone')
let pin=document.querySelector('#pin')
let loginButton=document.querySelector('.loginButton')
let error=document.querySelector('.error')
let loginPage=document.querySelector('.loginPage')
let homepage=document.querySelector('.homepage')
// login page variables end

// homepage variables start

let balanceAmt=document.querySelector('.balanceAmt') //shown account balance
let rechAmt=document.querySelector('#rechAmt') //recharge account 
let recPhone=document.querySelector('#pNumb')//recipient's phone number
let amount=document.querySelector('#amount') //amount to send
let rechargeButton=document.querySelector('.rechargeButton')
let error2=document.querySelector('.error2')


// homepage variables end



// ================VARIABLE DECLARATIONS===================//

// ================LOGIN PART START===================//
loginButton.addEventListener('click',()=>{
    let numberString=phoneNumber.value.toString()
    // console.log(numberString);
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

// ================HOMEPAGE PART START===================//

// ================REACHARGE ACCOUNT START===================//
    rechargeButton.addEventListener('click',()=>{
        let balanceID=document.getElementById('balanceID').textContent
        let balanceNumb=parseInt(balanceID)
        let rechAmtNumb=parseInt(document.getElementById('rechAmt').value)
        // console.log(balanceNumb)
        // console.log(typeof balanceNumb)
        // console.log(rechAmtNumb)
        if(rechAmt.value==''){
            error2.innerHTML="Please provide an amount"
        }
        else{
            let totalBalance=balanceNumb+rechAmtNumb
            error2.innerHTML=''
            console.log(totalBalance)
            balanceAmt.innerHTML=totalBalance
        }
    })
// ================RECHARGE ACCOUNT END===================//

// ================SEND MONEY START===================//



// ================SEND MONEY END===================//



// ================HOMEPAGE PART END===================//