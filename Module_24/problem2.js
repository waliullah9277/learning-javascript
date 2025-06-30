
function sendNotification(email) {    
    let mail = email.split('@')
    let username = mail[0];
    let domain = mail[1];
    if(email.includes('@')){
        return `${username} sent you an email from ${domain}`
    }
    else{
        return "Invalid Email Address!"
    }
}

console.log(sendNotification("zihad@gmail.com"))
console.log(sendNotification("zihad.gmail.com"))
console.log(sendNotification("zihad.ph@gmail.com"))
console.log(sendNotification("nadim.naem5@outlook.com"))
