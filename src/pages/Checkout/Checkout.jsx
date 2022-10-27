import { useState, useRef, useEffect } from "react"
import { useLocation, Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem'
import * as orderService from '../../services/orderService'

const Checkout = (props) => {
  const { id } = useParams()
  
  const location = useLocation()
  const [order, setOrder] = useState([])
  const [pizzas, setPizzas ] = useState([])
  const [beverages, setBeverages ] = useState([])
  const [pizzaData, setPizzaData ] = useState([])

  const handleChange = evt => {
    //setInventory()
  }
  
  useEffect(() => {
    const fetchOrder = async () => {
      const data = await orderService.show(id)
      setOrder(data)
    }
    fetchOrder()
  }, [id])

  useEffect(() => {
    setPizzas(order.pizzas)
    setBeverages(order.beverages)
  }, [order])

  const handleSubmit = evt => {
    evt.preventDefault()
  }
  
  useEffect(() => {
    const priceData = pizzas?.map(pizza => 
      pizza?.ingredients.reduce((previous, current) => 
        previous + current.price
      ,0)  
    )
    const nameData = pizzas?.map(pizza => 
      pizza?.ingredients.reduce((previous, current) => 
        `${previous}, ${current.name}` 
      ,'')  
    )
    setPizzaData([priceData, nameData])
  }, [pizzas])
  
  return (
    <>
      <h1>In Checkout</h1>
      <h5>Your Pizzas</h5>
      {console.log(pizzaData)};
      {pizzaData?.map(element => 
        <CheckoutItem 
          item={element[1]}
          price={element[0]}  
        />
      )}
      <h5>Your Beverages</h5>
      {beverages?.map(element => 
        <CheckoutItem 
          item={element.name}
          price={element.price}  
        />)}
    </>
  )
}

export default Checkout