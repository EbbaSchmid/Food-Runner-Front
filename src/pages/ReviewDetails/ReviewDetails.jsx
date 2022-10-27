import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import styles from './ReviewDetails.module.css'

// Services
import * as reviewService from '../../services/reviewService'

const ReviewDetails = (props) => {
  const { id } = useParams()
  const [review, setReview] = useState(null)
  console.log('review', review)
  console.log('id', id)

  useEffect(() => {
    const fetchReview = async () => {
      const data = await reviewService.show(id)
      setReview(data)
      console.log('data', data)
    }
    fetchReview()
  }, [id])

  if(!review)return <h1>Loading</h1>

  return (
    <>
    <main className={styles.container}>

    <div className="text-center mt-5">
            <img src="./truck-fast-solid.svg" alt="Pizza Truck Logo"/>
          </div> 
          <h1>Pizza Pirates</h1>
          <p className="mb-4">Fresh Mediterranean Pizza</p>

      <h2>Review Details:</h2>
      <article>
        <p>{review.review}</p>
      </article>
    </main>
    </>
  )
}

export default ReviewDetails