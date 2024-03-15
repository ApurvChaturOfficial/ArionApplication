const EventHandler = {
	SocialLink: {
		Add: Redux => {
			return (
				Redux.dispatch({ type: Redux.action.FormObject, payload: {
					...Redux.state.FormObject,
					FormValue: {
						...Redux.state.FormObject.FormValue,
						socialLinks: [
							...Redux.state.FormObject.FormValue.socialLinks, {
							title: "",
							url: "",
						}]
					}
				} })                        
			)
		},
		Remove: (Redux, index) => {
			return (
				Redux.dispatch({ type: Redux.action.FormObject, payload: {
					...Redux.state.FormObject,
					FormValue: {
						...Redux.state.FormObject.FormValue,
						socialLinks: [
							...Redux.state.FormObject.FormValue.socialLinks.slice(0, index),
							...Redux.state.FormObject.FormValue.socialLinks.slice(index + 1)
						]
					}
				} })                        
			)
		},
		Change: (event, Redux, index) => {
			let {name, value} = event.target


			let links1 = Redux.state.FormObject.FormValue.socialLinks
			links1[index] = {
				...links1[index],
				[name]: value
			}

			return (
				Redux.dispatch({
					type: Redux.action.FormObject,
					payload: {
						...Redux.state.FormObject,
						FormValue: {
							...Redux.state.FormObject.FormValue,
							socialLinks: links1
						},
					},
				})
			)
		}
	},

	WebLink: {
		Add: Redux => {
			return (
				Redux.dispatch({ type: Redux.action.FormObject, payload: {
					...Redux.state.FormObject,
					FormValue: {
						...Redux.state.FormObject.FormValue,
						webLinks: [
							...Redux.state.FormObject.FormValue.webLinks, {
							title: "",
							url: "",
						}]
					}
				} })                        
			)
		},
		Remove: (Redux, index) => {
			return (
				Redux.dispatch({ type: Redux.action.FormObject, payload: {
					...Redux.state.FormObject,
					FormValue: {
						...Redux.state.FormObject.FormValue,
						webLinks: [
							...Redux.state.FormObject.FormValue.webLinks.slice(0, index),
							...Redux.state.FormObject.FormValue.webLinks.slice(index + 1)
						]
					}
				} })                        
			)
		},
		Change: (event, Redux, index) => {
			let {name, value} = event.target


			let links1 = Redux.state.FormObject.FormValue.webLinks
			links1[index] = {
				...links1[index],
				[name]: value
			}

			return (
				Redux.dispatch({
					type: Redux.action.FormObject,
					payload: {
						...Redux.state.FormObject,
						FormValue: {
							...Redux.state.FormObject.FormValue,
							webLinks: links1
						},
					},
				})
			)
		}
	},

}

export default EventHandler