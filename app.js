const password = prompt("Enter Your Password:");

if (password.length >= 6 && password.indexOf(' ') === -1){
    console.log("Correct!!");
} else(
    console.log('Incorrect Password Format')
)