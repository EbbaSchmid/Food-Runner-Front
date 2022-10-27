import { Link } from "react-router-dom"
import styles from './ReviewCard.module.css'

// Components
// import Icon from "../Icon/Icon"
// import AuthorInfo from "../AuthorInfo/AuthorInfo"

const ReviewCard = ({ review }) => {
  console.log('review.text', review.text, review)
  return (
    <>

    
      {/* <Link to={`/reviews/${review._id}`}> */}
        <div className={styles.reviewCardBody}>
          <article className={styles.container}>
            <p>{review.review}</p>
          </article>
        </div>
      {/* </Link> */}
    </>
  )
}

export default ReviewCard