import { useState, useRef, useEffect } from "react"
import { useLocation, Link } from "react-router-dom"
import * as orderService from '../../services/orderService'
import styles from './Admin.module.css'


const Admin = (props) => {
  
  const location = useLocation()
  const [orderData, setOrderData] = useState([])
  
  const handleChange = evt => {
    setOrderData()
  }
  
  useEffect(() => {
    const fetchOrders = async () => {
      const orderData = await orderService.getAll()
      setOrderData(orderData)
    }
    fetchOrders()
  }, [])

  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleUpdatePuppy()
  }
  
  return (
    <>
    <main className={styles.main}>
      <div className={styles.parent}>
        <div className={styles.div1}>
          <h1>Pizza Pirates/Admin</h1>
        </div>
        <div className={styles.div2}>
          <button type="submit" 
            className="btn btn-success" 
            id={styles['signout']}
            >Log-Out
          </button>
        </div>
        <div className={styles.div3}>
        <h5>Incoming Orders:</h5>
          <div className={styles.orderList}>
            <div className={styles.order}>
              <div className={styles.rowOrder}>
                <div className={styles.columnLeftOrder}>
                  <p1>Order #001</p1>
                </div>
                <div className={styles.columnRightOrder}>
                  <button
                    type="submit"
                    className="btn btn-success" 
                    id={styles['fulfill']}
                    >Fulfill
                  </button>
                  <button
                    type="submit"
                    className="btn btn-success" 
                    id={styles['view']}
                    >View
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>    
        <div className={styles.div4}>
        <h6>Today at a glance:</h6>
        <div className={styles.subdiv}>
          <div className={styles.row}>
            <div className={styles.columnLeft}>Sales:</div>
            <div className={styles.columnRight}>$400</div>
          </div>
          <div className={styles.row}>
            <div className={styles.columnLeft}>Orders:</div>
            <div className={styles.columnRight}>7</div>
          </div>
        </div>
        </div>
        <div className={styles.div5}>heleeeeeeeeeelo3</div>
      </div>
    </main>
		</>
  )
}

export default Admin