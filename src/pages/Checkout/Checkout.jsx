import { useState, useRef, useEffect } from "react"
import { useLocation, Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem'
import * as orderService from '../../services/orderService'

const Checkout = (props) => {
  const { id } = useParams()
  
  const location = useLocation()
  const [order, setOrder] = useState([])
  
  const handleChange = evt => {
    //setInventory()
  }
  
  useEffect(() => {
    const fetchOrder = async () => {
      const data = await orderService.show(id)
      setOrder(data)
      console.log('data', data)
    }
    fetchOrder()
  }, [id])

  const handleSubmit = evt => {
    evt.preventDefault()
  }
  
  return (
    <>
        <h1>In Checkout</h1>
        <CheckoutItem />
		</>
  )
}

export default Checkout