import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Inventory.module.css'
import Crusts from '../Crusts/Crusts'
import * as authService from '../../services/authService'

const Inventory = props => {
  const [inventory, setInventory] = useState()
  const navigate = useNavigate()

  const crust = props.inventory.filter(element => 
    element.type === 'crust'
  )

  const beverages = props.inventory.filter(element => 
    element.type === 'beverages'
  )

  const ingredients = props.inventory.filter(element => 
    element.type === 'ingredient'
  )

  console.log(crust)
  console.log(beverages)
  console.log(ingredients)
  

  return (
    <>
    {console.log(props.inventory)}
      
    <div class={styles.parent}>
      <div class={styles.div1}>
        <h1>Pizza Pirates</h1>
        <h2>Build your Own Pizza</h2> 
      </div>
      <div class={styles.div2}>
        <Crusts crusts={crust}/>
      </div>
      <div class={styles.div3}>

      </div>
    </div>

    </>
  )
}

export default Inventory