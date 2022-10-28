const Items = (props) => {

  return (
    <>
    <div style={{margin: '4px 0'}} >
      <input 
        type="checkbox" 
        id={props.id} 
        name={props.name} 
        value={props.name} 
        onChange={e => props.handleFunction(props.id, e)}
      />
      <label 
        style={{paddingLeft: '3px'}}>{props.name}
      </label> 
    </div>
    </>
  )
}

export default Items