const InitialState = {
	A: "Bro... Inside PortfolioCreatePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const PortfolioCreatePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-portfolio-create-page':
			return {...state, FormObject: action.payload}
		case 'received-object-portfolio-create-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-portfolio-create-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-portfolio-create-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-portfolio-create-page',
	ReceivedObject: 'received-object-portfolio-create-page',
	RequiredObject: 'required-object-portfolio-create-page',
	ExtraObject: 'extra-object-portfolio-create-page',
}  

export default PortfolioCreatePageState