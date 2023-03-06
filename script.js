let submit=document.querySelector("#submit");
let fullname=document.querySelector("#fname");
let email=document.querySelector("#email");

if(email.length ===0 && fullname.length===0){
    submit.disabled=true;
}
