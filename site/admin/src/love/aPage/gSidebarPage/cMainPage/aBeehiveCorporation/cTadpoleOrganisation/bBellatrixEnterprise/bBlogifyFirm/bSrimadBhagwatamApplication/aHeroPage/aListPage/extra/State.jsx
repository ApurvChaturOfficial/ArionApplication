const InitialState = {
	A: "Bro... Inside HeroListPageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const HeroListPageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-hero-list-page':
			return {...state, FormObject: action.payload}
		case 'received-object-hero-list-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-hero-list-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-hero-list-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-hero-list-page',
	ReceivedObject: 'received-object-hero-list-page',
	RequiredObject: 'required-object-hero-list-page',
	ExtraObject: 'extra-object-hero-list-page',
}  

export default HeroListPageState