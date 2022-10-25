import styles from './Landing.module.css'

const Landing = () => {
  return (
    <>
      <main className={styles.container}>
        <section className={styles.about}>
          <header>
            <h1>Food Runner</h1>
            <h3>Sign up or Log-in</h3>
          </header>
        </section>
      </main>
    </> 
  )
}

export default Landing
