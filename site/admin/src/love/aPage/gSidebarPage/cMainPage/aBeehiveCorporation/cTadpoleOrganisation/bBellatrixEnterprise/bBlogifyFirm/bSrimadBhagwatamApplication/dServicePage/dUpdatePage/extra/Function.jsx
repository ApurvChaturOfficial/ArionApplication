
const Function = {
  validateFormValues: FormValue => {
		const errors = {}

		// title
		if (!FormValue.title) {
			errors.title = "Please enter title"
		} else if (FormValue.title.length < 3 || FormValue.title.length > 100) {
			errors.title = "Please enter 3-100 characters"
		}
		// subtitle
		if (!FormValue.subtitle) {
			errors.subtitle = "Please enter subtitle"
		} else if (FormValue.subtitle.length < 3 || FormValue.subtitle.length > 300) {
			errors.subtitle = "Please enter 3-300 characters"
		}
		// description
		if (!FormValue.description) {
			errors.description = "Please enter description"
		} 
		// status
		if (!FormValue.status) {
			errors.status = "Please select status"
		}

		return errors;	}
}

export default Function