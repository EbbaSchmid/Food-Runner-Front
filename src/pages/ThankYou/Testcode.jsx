import { useState, useRef, useEffect } from "react"
import { useLocation, Link } from "react-router-dom"
import * as reviewService from '../../services/reviewService'
import styles from './ThankYou.module.css'
import ReviewForm from '../../components/ReviewForm/ReviewForm'
// import ReviewList from "../ReviewList/ReviewList"


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
          <div className="text-center mt-5">
            <img src="./truck-fast-solid.svg" alt="Pizza Truck Logo"/>
          </div> 
          <h1>Pizza Pirates</h1>
          <p className="mb-4">Thank You for ordering Fresh Mediterranean Pizza!</p>
          </header>
          <h4>Your order has been submitted and will be ready in 30 minutes. <br></br>
          Thank you for ordering with Pizza Pirates.</h4>

          <br></br>
          <br></br>
          <p>Tell us what you think about Pizza Pirates:</p> 
      
        <div className="rate">
          <input type="radio" id="star5" name="rate" value="5" />
            <label htmlFor="star5" title="text">5 stars</label>
          
          <input type="radio" id="star4" name="rate" value="4" />
            <label htmlFor="star4" title="text">4 stars</label>
            
          <input type="radio" id="star3" name="rate" value="3" />
            <label htmlFor="star3" title="text">3 stars</label>
            
          <input type="radio" id="star2" name="rate" value="2" />
            <label htmlFor="star2" title="text">2 stars</label>
            
          <input type="radio" id="star1" name="rate" value="1" />
            <label htmlFor="star1" title="text">1 star</label>
        </div>
            <ReviewForm
              handleReview={props.handleReview}
              updateMessage={updateMessage}></ReviewForm>

        </section>
      </main>
    </> 
  )
}

export default ThankYou