const Items = (props) => {
  const showIngredients = props.ingredients.map( product => {
    return product.name
  })

  const showBeverages = props.beverages.map( product => {
    return product.name
  })

  return (
    <>
      <form action="">
        <div>
          <h6>Ingredients ($0.99 each)</h6>
          <label>
            {showIngredients}
            <input type="checkbox" name="name"/>
          </label>
        </div>
        <div>
          <h6>Choose a beverage bleow ($2.99 each)</h6>
          <label>
            {showBeverages}
            <input type="checkbox" name="name" />
          </label>
        </div>
      </form>
    </>
  )
}

export default Items