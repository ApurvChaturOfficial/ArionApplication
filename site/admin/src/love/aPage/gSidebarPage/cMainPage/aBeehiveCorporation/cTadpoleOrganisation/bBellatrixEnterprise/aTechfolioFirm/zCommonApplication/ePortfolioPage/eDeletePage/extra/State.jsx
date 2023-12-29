const InitialState = {
	A: "Bro... Inside PortfolioDeletePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const PortfolioDeletePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-portfolio-delete-page':
			return {...state, FormObject: action.payload}
		case 'received-object-portfolio-delete-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-portfolio-delete-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-portfolio-delete-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-portfolio-delete-page',
	ReceivedObject: 'received-object-portfolio-delete-page',
	RequiredObject: 'required-object-portfolio-delete-page',
	ExtraObject: 'extra-object-portfolio-delete-page',
}  

export default PortfolioDeletePageState