import React from 'react';
import './Registration.css';

const SignUp = () => {
    const handleSignUp = () => {
        console.log("Button Clicked");
        var email = document.getElementById('SU_email').value;
        var password = document.getElementById('SU_pass').value;
        
        //Ovdje treba pronaci kako da provjerava je li email oblika email
        if (email.length < 4) {
          alert('Please enter an email address.');
          return;
        }
        if (password.length < 4) {
          alert('Please enter a password.');
          return;
        }

        /*firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode == 'auth/weak-password') {
            alert('The password is too weak.');
          } else {
            alert(errorMessage);
          }
          console.log(error);
        });*/
      }
    
    
    return (
        <div className='containter'>
            <div className='container_inner'>
                <h1>Sign Up</h1>
                <input id='SU_email' placeholder='Email' type='text'></input>
                <input id='SU_pass' placeholder='Password' type='password'></input>
                <button onClick={handleSignUp}>Submit</button>
            </div>
        </div>
    );
}

export default SignUp;