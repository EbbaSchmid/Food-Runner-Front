import styles from './CartBuilder.module.css'

const CartBuilder = (props) => {

  return(
    <>
    <div className="">
        <form
          autoComplete="off"
          onSubmit={e => props.handleAddToCart(e)}
          className={styles.container}
        >
          <button type="submit" className="btn btn-success" id={styles['cart']}>Add to Cart</button>
        </form>
          Pizzas in Cart:
            {props.pizzas}
          Bev. in Cart:
            {props.beverages}

      <form
          autoComplete="off"
          onSubmit={e => props.handleCheckout(e)}
          className={styles.container}
        >
          <button type="submit" className="btn btn-success" id={styles['checkout']}>Checkout</button>
        </form>        
    </div>
    </>
    
  )
}

export default CartBuilder