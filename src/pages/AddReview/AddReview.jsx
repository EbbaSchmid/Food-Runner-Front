import { useState, useRef, useEffect } from "react"

const AddReview = (props) => {
  const [formData, setFormData] = useState({
    review: '',
  })

  const [validForm, setValidForm] = useState(false)
  
  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }
  
  const formElement = useRef()
  
  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

  const handleSubmit = evt => {
    evt.preventDefault()
    // call some function that sends formData somewhere
    props.handleAddReview(formData)
  }
  
  return (
    <>
			<h1>Add Review</h1>
			<form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
				<div className="form-group mb-3">
					<label htmlFor="name-input" className="form-label">
						Review
					</label>
					<input 
						type="text"
						className="form-control"
						id="name-input"
						name="name"
            value={formData.name}
            onChange={handleChange}
						required
					/>
				</div>
				<div className="d-grid">
					<button
						type="submit"
						className="btn btn-primary btn-fluid"
            disabled={!validForm}
					>
						Add review
					</button>
				</div>
			</form>
		</>
  );
}

export default AddReview;