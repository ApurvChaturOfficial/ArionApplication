const InitialState = {
	A: "Bro... Inside PortfolioUpdatePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const PortfolioUpdatePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-portfolio-update-page':
			return {...state, FormObject: action.payload}
		case 'received-object-portfolio-update-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-portfolio-update-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-portfolio-update-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-portfolio-update-page',
	ReceivedObject: 'received-object-portfolio-update-page',
	RequiredObject: 'required-object-portfolio-update-page',
	ExtraObject: 'extra-object-portfolio-update-page',
}  

export default PortfolioUpdatePageState