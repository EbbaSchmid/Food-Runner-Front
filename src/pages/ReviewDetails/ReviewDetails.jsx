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
    <main className={styles.container}>
      <h1>Review Details:</h1>
      <article>
        <p>{review.review}</p>
      </article>
      <section>
        <h1>Comments</h1>
      </section>
    </main>
  )
}

export default ReviewDetails