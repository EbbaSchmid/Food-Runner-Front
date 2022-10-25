import styles from './Crusts.module.css'
const Crusts = props => {

  return(
    <div className={styles.containerFluid}>
      <input type="radio" class="btn-check" name="options" id="6Inch" value="6" autocomplete="off" checked/>
      <label class="btn btn-outline-primary" for="option1">6</label>
      <input type="radio" class="btn-check" name="options" id="12Inch" value="12" autocomplete="off"/>
      <label class="btn btn-outline-primary" for="option2">9</label>
      <input type="radio" class="btn-check" name="options" id="16Inch" value="16" autocomplete="off"/>
      <label class="btn btn-outline-primary" for="option3">12</label>
    </div>
  )
}

export default Crusts