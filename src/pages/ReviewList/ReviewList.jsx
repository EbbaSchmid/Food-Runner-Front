import styles from './ReviewList.module.css'
import ReviewCard from '../../components/ReviewCard/ReviewCard'

const ReviewList = (props) => {
  return (
    <main className={styles.container}>
      {props.reviews.map((review) => (
        <ReviewCard key={review._id} review={review} />
      ))}
    </main>
  )
}

export default ReviewList