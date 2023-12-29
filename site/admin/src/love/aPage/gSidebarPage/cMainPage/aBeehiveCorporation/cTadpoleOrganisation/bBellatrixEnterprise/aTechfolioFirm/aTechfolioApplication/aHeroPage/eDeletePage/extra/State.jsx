const InitialState = {
	A: "Bro... Inside HeroDeletePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const HeroDeletePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-hero-delete-page':
			return {...state, FormObject: action.payload}
		case 'received-object-hero-delete-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-hero-delete-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-hero-delete-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-hero-delete-page',
	ReceivedObject: 'received-object-hero-delete-page',
	RequiredObject: 'required-object-hero-delete-page',
	ExtraObject: 'extra-object-hero-delete-page',
}  

export default HeroDeletePageState