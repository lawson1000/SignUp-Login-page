let email = document.querySelector("#email");
let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirmPassword");
let errorPassword = document.querySelector("#errorPassword")

window.addEventListener("submit",(e)=>{
    let passwordValue = password.value
    let passwordLength = password.length
    if (passwordValue.length < 8 ){
        errorPassword.innerText = "Password must be at least 8 characters long"
        e.preventDefault();
        errorPassword.style.display="block";
        errorPassword.style.color="red";
    }
    else if(/A-Z/.test(passwordValue)===false){
        errorPassword.innerText = "Password must contain at least one UpperCase"
        e.preventDefault();
        errorPassword.style.display="block";
        errorPassword.style.color="red";
        console.log((/A-Z/.test(passwordValue)))
        // (!(/A-Z/.test(passwordValue))
    } 
    // else{

    // }
})