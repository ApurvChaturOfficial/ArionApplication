const InitialState = {
	A: "Bro... Inside AboutCreatePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const AboutCreatePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-about-create-page':
			return {...state, FormObject: action.payload}
		case 'received-object-about-create-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-about-create-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-about-create-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-about-create-page',
	ReceivedObject: 'received-object-about-create-page',
	RequiredObject: 'required-object-about-create-page',
	ExtraObject: 'extra-object-about-create-page',
}  

export default AboutCreatePageState