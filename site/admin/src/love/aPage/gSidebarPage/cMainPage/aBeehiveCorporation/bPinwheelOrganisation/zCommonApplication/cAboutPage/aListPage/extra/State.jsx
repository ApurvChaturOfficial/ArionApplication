const InitialState = {
	A: "Bro... Inside AboutListPageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const AboutListPageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-about-list-page':
			return {...state, FormObject: action.payload}
		case 'received-object-about-list-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-about-list-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-about-list-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-about-list-page',
	ReceivedObject: 'received-object-about-list-page',
	RequiredObject: 'required-object-about-list-page',
	ExtraObject: 'extra-object-about-list-page',
}  

export default AboutListPageState