import styles from './ReviewList.module.css'
import ReviewForm from '../../components/ReviewForm/ReviewForm'

const ReviewList = (props) => {
  return (
    <>
      <h1>Reviews</h1>
      <div className={styles.container}>
        {props.reviews.map(review =>
          <ReviewList 
            review={review} 
            key={review._id} 
          />
        )}
      </div>
    </>
  );
}

export default ReviewList;