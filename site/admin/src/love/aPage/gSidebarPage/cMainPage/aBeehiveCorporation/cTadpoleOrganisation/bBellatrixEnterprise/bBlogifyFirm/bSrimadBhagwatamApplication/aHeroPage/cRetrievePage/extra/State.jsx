const InitialState = {
	A: "Bro... Inside HeroRetrievePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const HeroRetrievePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-hero-retrieve-page':
			return {...state, FormObject: action.payload}
		case 'received-object-hero-retrieve-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-hero-retrieve-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-hero-retrieve-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-hero-retrieve-page',
	ReceivedObject: 'received-object-hero-retrieve-page',
	RequiredObject: 'required-object-hero-retrieve-page',
	ExtraObject: 'extra-object-hero-retrieve-page',
}  

export default HeroRetrievePageState