import styles from './Landing.module.css'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <>
      <main className={styles.container}>
        <section className={styles.about}>
          <header>
            <div className="text-center mt-5">
              <img src="./truck-fast-solid.svg" alt="Pizza Truck Logo"/>
          </div>
            <h1 className='mt-1'>Pizza Pirates</h1>
            <h6>Fresh Mediterranean Pizza</h6>
            <p><a href="#">See All Reviews -></a></p>
          </header>
        </section>
        <p className="mt-1">Log-in or Sign-up below to order!</p>
        <div className="mt-1">
          <Link to="/login">
          <button type="submit" className="btn btn-success" id={styles['login-b']}>Log-In</button>
          </Link>
        </div>
        <p className="my-3">OR</p>
        <div>
        <Link to="/signup">
          <button type="submit" className="btn btn-success" id={styles['sign-b']}>Sign-Up</button>
        </Link>  
        </div>
        <div className="mt-5">
          <p className="mb-3"><a href="#">Sign in</a> as Business Owner</p>
          <p>Powered by Food Runner, Inc. ©</p>
        </div>
      </main>
    </> 
  )
}

export default Landing
