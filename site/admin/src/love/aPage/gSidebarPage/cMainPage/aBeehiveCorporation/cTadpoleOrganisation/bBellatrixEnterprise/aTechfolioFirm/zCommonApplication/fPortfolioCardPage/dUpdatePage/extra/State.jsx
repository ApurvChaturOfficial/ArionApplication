const InitialState = {
	A: "Bro... Inside PortfolioCardUpdatePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const PortfolioCardUpdatePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-portfolio-card-update-page':
			return {...state, FormObject: action.payload}
		case 'received-object-portfolio-card-update-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-portfolio-card-update-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-portfolio-card-update-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-portfolio-card-update-page',
	ReceivedObject: 'received-object-portfolio-card-update-page',
	RequiredObject: 'required-object-portfolio-card-update-page',
	ExtraObject: 'extra-object-portfolio-card-update-page',
}  

export default PortfolioCardUpdatePageState