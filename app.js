import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { auth } from "./config.js";


const form = document.querySelector('#form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const fault = document.querySelector("#error") 


form.addEventListener('submit' , (event) => {

event.preventDefault();

signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    window.location ='home.html'
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    console.log("Error");
    fault.innerHTML=`<h1> LOGIN FAILED INVALID USER ID OR PASSWORD </h1>`
  });

})