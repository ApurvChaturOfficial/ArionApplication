const InitialState = {
	A: "Bro... Inside HeroUpdatePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const HeroUpdatePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-hero-update-page':
			return {...state, FormObject: action.payload}
		case 'received-object-hero-update-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-hero-update-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-hero-update-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-hero-update-page',
	ReceivedObject: 'received-object-hero-update-page',
	RequiredObject: 'required-object-hero-update-page',
	ExtraObject: 'extra-object-hero-update-page',
}  

export default HeroUpdatePageState