import styles from './Landing.module.css'

const Landing = () => {
  return (
    <>
      <main className={styles.container}>
        <section className={styles.about}>
          <header>
          <div class="text-center mt-5">
            <img src="./truck-fast-solid.svg" alt="Pizza Truck Logo"/>
          </div> 
          <h1>Pizza Pirates</h1>
          <p class="mb-4">Fresh Mediterranean Pizza</p>
          <h4><a href="#">See All Reviews</a></h4>
          </header>
          <p>Pizza was scrumdiddlyumptious!</p>
          <p>Crust and sauce are amamzing, five stars!</p>
        </section>
      </main>
    </> 
  )
}

export default Landing
