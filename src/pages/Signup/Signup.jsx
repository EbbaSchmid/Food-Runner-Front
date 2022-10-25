import { useState } from 'react'
import SignupForm from '../../components/SignupForm/SignupForm'
import styles from './Signup.module.css'

const Signup = props => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <main className={styles.container}>
      <div class="text-center mt-3">
      <img src="./truck-fast-solid.svg" alt="Pizza Truck Logo"/>
    </div>
      <h1>Pizza Pirates</h1>
      <h3>Sign-up</h3>
      <p>You are seconds away from enjoying<br />our mouth-watering pizza!</p>
      <SignupForm {...props} updateMessage={updateMessage} />
      <p>Powered by Food Runner, Inc. ©</p>
    </main>
  )
}

export default Signup
