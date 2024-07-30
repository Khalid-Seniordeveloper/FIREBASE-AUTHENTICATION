import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { auth } from "./config.js";


const form = document.querySelector('#form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
 const error = document.querySelector('#error')


form.addEventListener('submit' , (event) => {

event.preventDefault();

createUserWithEmailAndPassword(auth, email.value , password.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    email.value = "";
    password.value= '';
    window.location = 'index.html';
// error.innerHTML =   `<h1> YOU HAVE SUCCESSFULLY CREATED AN ACCOUNT NOW CLICK ON ALREADY A USER TO LOGIN <h1> `
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("ERROR FOUND");
    // ..
  });
})









// t