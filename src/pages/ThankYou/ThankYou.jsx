import { useState } from 'react'
import styles from './ThankYou.module.css'



const ThankYou = (props) => {
  const [message, setMessage] = useState([''])
  
  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <>
      <main className={styles.container}>
        <section className={styles.about}>
          <header>
          <div class="text-center mt-5">
            <img src="./truck-fast-solid.svg" alt="Pizza Truck Logo"/>
          </div> 
          <h1>Pizza Pirates</h1>
          <p class="mb-4">Thank You for ordering Fresh Mediterranean Pizza!</p>
          </header>
          <h4 id="submitMessage">Your order has been submitted and will be ready in 30 minutes. Thank you for ordering with Pizza Pirates.</h4>

          <p>{message}</p>
      <ReviewForm
        handleSignupOrLogin={props.handleSignupOrLogin}
        updateMessage={updateMessage}
      />


        </section>
      </main>
    </> 
  )
}

export default ThankYou