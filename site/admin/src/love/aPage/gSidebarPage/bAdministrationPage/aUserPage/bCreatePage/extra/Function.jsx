import regex from "@/love/dFunction/eRegex"

const Function = {
  validateFormValues: FormValue => {
		const errors = {}

		// firstName
		if (!FormValue.firstName) {
			errors.firstName = "Please enter first name"
		} else if (!regex.name.test(FormValue.firstName)) {
			errors.firstName = "Please enter valid first name"
		}
		// lastName
		if (!FormValue.lastName) {
			errors.lastName = "Please enter last name"
		} else if (!regex.name.test(FormValue.lastName)) {
			errors.lastName = "Please enter valid last name"
		}		
		// email
		if (!FormValue.email) {
			errors.email = "Please enter email"
		} else if (!regex.email.test(FormValue.email)) {
			errors.email = "Please enter valid email"
		}
		// password
		if (!FormValue.password) {
				errors.password = "Please enter password"
		} else if (FormValue.password.length < 8 || FormValue.password.length > 16) {
				errors.password = "Password length should be 8 to 16 characters"
		} else if (!regex.password.test(FormValue.password)) {
				errors.password = "Password should have 1 lowercase, 1 uppercase, 1 number, and be 8 to 16 characters long"
		} 
		
		// // image
		// if (!FormValue.image) {
		// 	errors.image = "Please select image"
		// }
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