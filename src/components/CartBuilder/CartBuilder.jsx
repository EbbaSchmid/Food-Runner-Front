import styles from './CartBuilder.module.css'

const CartBuilder = (props) => {

  return(
    <>
    <div className={styles.parent}>
      <div className={styles.div1}>
        <form
          autoComplete="off"
          onSubmit={e => props.handleAddToCart(e)}
          className={styles.container}
        >
          <button type="submit" className="btn btn-success" id={styles['cart']}>Add to Cart</button>
        </form>
      </div>
      <div className={styles.div2}>
      $400

      </div>
      <div className={styles.div3}>
      <form
          autoComplete="off"
          onSubmit={e => props.handleCheckout(e)}
          className={styles.container}
        >
          <button type="submit" className="btn btn-success" id={styles['checkout']}>Checkout</button>
        </form>        
      </div>
    </div>
    </>
    
  )
}

export default CartBuilder