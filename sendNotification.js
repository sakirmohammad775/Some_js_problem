function sendNotification(email){
    if( !email.includes('@f')){
        console.log("Invalid Email")
        return 
    }
    else{
        const [username,domain]=email.split('@')
        const message = `${username}sent you an email from ${domain}`;
        return message
    }
}
console.log(sendNotification('zihadgmail.com'))
