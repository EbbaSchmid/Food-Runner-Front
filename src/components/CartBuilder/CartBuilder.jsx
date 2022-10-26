import styles from './CartBuilder.module.css'

const CartBuilder = (props) => {

  return(

    <div className={styles.row}>
      <div className={styles.columnLeft}>Sales:</div>
      <div className={styles.columnRight}>$400</div>
    </div>
  )
}

export default CartBuilder