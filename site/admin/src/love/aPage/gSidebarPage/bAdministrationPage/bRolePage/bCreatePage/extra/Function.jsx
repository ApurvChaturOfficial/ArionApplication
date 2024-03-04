import clearFormObject from "@/love/dFunction/aClearFormObject"

const Function = {
  validateFormValues: FormValue => {
		const errors = {}

		// image
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
		// if (!FormValue.description) {
		// 	errors.description = "Please enter description"
		// } 
		// status
		// if (!FormValue.status) {
		// 	errors.status = "Please select status"
		// }

		return errors;	
	},

	handleSpecialCheckboxInput: (event, Redux, index) => {
		const { name, checked } = event.target;
		const menus = Redux.state.FormObject.FormValue.menus

		menus[index] = {
			...menus[index],
			access: {
				...menus[index].access,
				[name]: checked
			}
		}

		return (
			Redux.dispatch({
        type: Redux.action.FormObject,
        payload: {
          ...Redux.state.FormObject,
          FormValue: {
            ...Redux.state.FormObject?.FormValue,
            menus: menus
          },
        },
      })
		)
	},

	setForm: Redux => {
		clearFormObject(Redux);

    const menus = []

    Redux.state.RequiredObject?.MenuList?.map(each => {
      menus.push({
        menu: {
					_id: each.id
				},
        access: {
          list: false,
          create: false,
          retrieve: false,
          update: false,
          delete: false
        }
      })
    })

    Redux.dispatch({
      type: Redux.action.FormObject,
      payload: {
        ...Redux.state.FormObject,
        FormValue: {
          menus: menus
        },
      },
    })
	}

}

export default Function