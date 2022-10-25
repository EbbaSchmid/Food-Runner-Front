import { useState, useRef, useEffect } from "react"
import { useLocation, Link } from "react-router-dom"
import * as inventoryService from '../../services/inventoryService'

const PizzaBuilder = (props) => {
  
  const location = useLocation()
  const [inventory, setInventory] = useState([])
  
  const handleChange = evt => {
    setInventory()
  }
  
  useEffect(() => {
    const fetchAllInventory = async () => {
      const inventoryData = await inventoryService.getAll()
      setInventory(inventoryData)
    }
    fetchAllInventory()
  },[])

  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleUpdatePuppy()
  }
  
  return (
    <>
        <></>
		</>
  )
}

export default PizzaBuilder