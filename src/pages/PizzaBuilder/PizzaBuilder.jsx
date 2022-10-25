import { useState, useRef, useEffect } from "react"
import { useLocation, Link } from "react-router-dom"

const PizzaBuilder = (props) => {
  
  const location = useLocation()
  const [itemData, setItemData] = useState([])
  
  const handleChange = evt => {
    setItemData()
  }
  
  useEffect(() => {
    
  }, [])

  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleUpdatePuppy()
  }
  
  return (
    <>
        <section>
          <h1>Pizza Pirates</h1>
          <h2>Build your Own Pizza</h2>
        </section>

        <div class="container-fluid">
            <input type="radio" class="btn-check" name="options" id="6Inch" value="6" autocomplete="off" checked/>
            <label class="btn btn-outline-primary" for="option1">6</label>
            <input type="radio" class="btn-check" name="options" id="12Inch" value="12" autocomplete="off"/>
            <label class="btn btn-outline-primary" for="option2">9</label>
            <input type="radio" class="btn-check" name="options" id="16Inch" value="16" autocomplete="off"/>
            <label class="btn btn-outline-primary" for="option3">12</label>
      </div>
		</>
  )
}

export default PizzaBuilder