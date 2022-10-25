import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Inventory.module.css'
import Crusts from '../Crusts/Crusts'
import Items from '../Items/Items'
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

  const [selectedCrust, setCrustSelection] = useState({})

  const handleClick = (id) => {
    setCrustSelection(crust.find(element => element._id === id))
  }

  return (
    <>
    {console.log('selectedcrust', selectedCrust)}
    <div class={styles.parent}>
      <div class={styles.div1}>
        <h1>Pizza Pirates</h1>
        <h2>Build your Own Pizza</h2> 
      </div>
      <div class={styles.div2}>
        <div className={styles.containerFluid}>
          {crust.map((element, idx) => 
            <Crusts
              id={element._id}
              name={element.name}
              handleClick={handleClick}
              selected={element._id === selectedCrust._id ? true : false}
            />  
          )}
        </div>
      </div>
      <div class={styles.div3}>
        <Items 
          beverages={beverages}
          ingredients={ingredients}
        />

      </div>
    </div>
    </>
  )
}

export default Inventory