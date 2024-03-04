const InitialState = {
	A: "Bro... Inside AboutDeletePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const AboutDeletePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-about-delete-page':
			return {...state, FormObject: action.payload}
		case 'received-object-about-delete-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-about-delete-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-about-delete-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-about-delete-page',
	ReceivedObject: 'received-object-about-delete-page',
	RequiredObject: 'required-object-about-delete-page',
	ExtraObject: 'extra-object-about-delete-page',
}  

export default AboutDeletePageState