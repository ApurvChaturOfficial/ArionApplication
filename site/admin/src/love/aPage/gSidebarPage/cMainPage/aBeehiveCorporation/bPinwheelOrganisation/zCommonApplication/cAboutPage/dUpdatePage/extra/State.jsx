const InitialState = {
	A: "Bro... Inside AboutUpdatePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const aboutUpdatePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-about-update-page':
			return {...state, FormObject: action.payload}
		case 'received-object-about-update-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-about-update-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-about-update-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-about-update-page',
	ReceivedObject: 'received-object-about-update-page',
	RequiredObject: 'required-object-about-update-page',
	ExtraObject: 'extra-object-about-update-page',
}  

export default aboutUpdatePageState