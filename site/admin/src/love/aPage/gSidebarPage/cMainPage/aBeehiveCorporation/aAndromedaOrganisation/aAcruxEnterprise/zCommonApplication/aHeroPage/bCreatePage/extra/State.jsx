const InitialState = {
	A: "Bro... Inside HeroCreatePageState32",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const HeroCreatePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-hero-create-page':
			return {...state, FormObject: action.payload}
		case 'received-object-hero-create-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-hero-create-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-hero-create-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-hero-create-page',
	ReceivedObject: 'received-object-hero-create-page',
	RequiredObject: 'required-object-hero-create-page',
	ExtraObject: 'extra-object-hero-create-page',
}  

export default HeroCreatePageState