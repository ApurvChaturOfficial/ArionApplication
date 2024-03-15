const InitialState = {
	A: "Bro... Inside AboutRetrievePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const AboutRetrievePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-about-retrieve-page':
			return {...state, FormObject: action.payload}
		case 'received-object-about-retrieve-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-about-retrieve-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-about-retrieve-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-about-retrieve-page',
	ReceivedObject: 'received-object-about-retrieve-page',
	RequiredObject: 'required-object-about-retrieve-page',
	ExtraObject: 'extra-object-about-retrieve-page',
}  

export default AboutRetrievePageState