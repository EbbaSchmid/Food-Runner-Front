import styles from './ReviewList.module.css'
import ReviewCard from '../../components/ReviewCard/ReviewCard'

const ReviewList = (props) => {
  return (
    <>


    
    <main className={styles.container}>

      <div className="text-center mt-5">
      <img src="./truck-fast-solid.svg" alt="Pizza Truck Logo"/>
    </div> 
    <h1>Pizza Pirates</h1>
    <p className="mb-4">Fresh Mediterranean Pizza</p>
    <h6>All Reviews:</h6>

      {props.reviews.map((review) => (
        <ReviewCard key={review._id} review={review} />
      ))}

    <p className="mt-5">Powered by Food Runner, Inc. ©</p>
    </main>
    </>
  )
}

export default ReviewList