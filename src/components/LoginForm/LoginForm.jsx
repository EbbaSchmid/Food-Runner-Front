import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './LoginForm.module.css'
import * as authService from '../../services/authService'



const LoginForm = props => {
  const [formData, setFormData] = useState({
    email: '',
    pw: '',
  })
  const navigate = useNavigate()

  const handleChange = e => {
    props.updateMessage('')
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      await authService.login(formData)
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  return (
    
    <>
    <div class="main-body">
    <div class="text-center">
      <img src="./truck-fast-solid.svg" alt="Pizza Truck Logo"/>
    </div>
    <h1>Pizza Pirates</h1>
    <p class="mb-4">Sign-up or Log-in</p>
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className={styles.container}
    >
      <div className={styles.inputContainer}>
        <input
          className="form-control"
          placeholder="Email"
          type="text"
          autoComplete="off"
          id="email"
          value={formData.email}
          name="email"
          onChange={handleChange}
        />
      </div><br /><br />
      <div className={styles.inputContainer}>
        <input
          className="form-control"
          placeholder="Password"
          type="password"
          autoComplete="off"
          id="password"
          value={formData.pw}
          name="pw"
          onChange={handleChange}
        />
      </div>
      <div class="mt-3">
        <button type="button" className="btn btn-success" id={styles['login-b']}>Log-In</button>
      </div>
      <p class="my-3">OR</p>
      <div>
        <Link to="/signup">
        <button type="button" className="btn btn-success" id={styles['sign-b']}>Sign-Up</button>
        </Link>
      </div>
      <div class="mt-5">
        <p class="mb-3"><a href="#">Sign in</a> as Business Owner</p>
        <p>Powered by Food Runner, Inc. ©</p>
      </div>
    </form>
    </div>  
    </>
  )
}

export default LoginForm