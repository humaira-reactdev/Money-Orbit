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

//Recharge part variables
let rechAmt=document.querySelector('#rechAmt') //recharge account with this amount
let rechargeButton=document.querySelector('.rechargeButton')
let error2=document.querySelector('.error2')

//send money variables
let sendButton=document.querySelector('.sendButton')
let amount=document.querySelector('#amount') //amount to send
let recPhone=document.querySelector('#pNumb')//recipient's phone number
let error3=document.querySelector('.error3')

//transaction history variables
let headings=document.querySelector('.headings')
let nullState=document.querySelector('.nullState')
let transactionContainer=document.querySelector('.transaction_container')

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
        headings.style='display:none'
        transactionContainer.style='display:none'
        
        
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
            nullState.innerHTML=''
            headings.style='display:flex'
            console.log(totalBalance)
            balanceAmt.innerHTML=totalBalance
            transactionContainer.style='display:flex'
            rechAmt.value=''
        }
    })
// ================RECHARGE ACCOUNT END===================//

// ================SEND MONEY START===================//
sendButton.addEventListener('click',()=>{
    let balanceID=document.getElementById('balanceID').textContent
    let balanceNumb=parseInt(balanceID)
    let recPhoneString=recPhone.value.toString()
    // console.log(recPhoneString)
    let amtNumb=parseInt(document.getElementById('amount').value)
    if (amount.value=='' || recPhone.value==''){
        error3.innerHTML='None of the fields can be empty'
    }
    else if (recPhoneString.length<11){
        error3.innerHTML='Please provide a proper phone number with 11 digits'
    }
    else if(balanceNumb==0){
        error3.innerHTML='Your current account balance is 0. Please recharge your account to send money.'
    }
    else if(balanceNumb<amtNumb){
        error3.innerHTML='Insufficient balance'
    }
    
    else{
        error3.innerHTML=''
        let totalBalance=balanceNumb-amtNumb
        nullState.innerHTML=''
        headings.style='display:block'
        transactionContainer.style='display:flex'
        balanceAmt.innerHTML=totalBalance
        amount.value=''

        //adding to transaction history
        let singleTransaction=document.createElement('div')
        transactionContainer.appendChild(singleTransaction)
    }
    
})

// ===================SEND MONEY END===================//

// ===================TRANSACTION HISTORY START===================//



// ===================TRANSACTION HISTORY END===================//


// ================HOMEPAGE PART END===================//