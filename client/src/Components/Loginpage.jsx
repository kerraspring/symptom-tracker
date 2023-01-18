import React from 'react'

const Loginpage = () => {

  const googleLogin = () => {
    window.open("http://localhost:4000/auth/google", "_self")
  }

  return (
    <div>
      <button onClick={googleLogin}>Login with Google</button>
    </div>
  )
}

export default Loginpage