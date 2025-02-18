import React from 'react'

const Register = () => {

    const handleRegister = (event) => {
        event.preventDefault();   // do not reload the screen on form submit
        console.log('Register button clicked');
    }

    let age = 18;


  return (
    <div>
        <h1>Register</h1>
        <p>Welcome to the Register page. Here you can register yourself.</p>

        <form>
            {/* Conditional rendering */}
            {age >=18 ? 
                <div>
                    <h2>Register Form</h2>
                    <input type="text" placeholder='username' />
                    <input type="password" placeholder='password' />
                    <button onClick={handleRegister}>Submit</button>
                    <button type="reset">Reset</button>
                </div> 
                 : 
                 <h2>You are not eligible to register</h2>
            }
        </form>
    </div>
  )
}

export default Register