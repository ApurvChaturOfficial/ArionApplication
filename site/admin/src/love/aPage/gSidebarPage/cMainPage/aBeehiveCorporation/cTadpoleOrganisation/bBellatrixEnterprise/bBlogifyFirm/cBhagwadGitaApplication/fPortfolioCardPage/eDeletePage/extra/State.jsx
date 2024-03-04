const InitialState = {
	A: "Bro... Inside PortfolioCardDeletePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const PortfolioCardDeletePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-portfolio-card-delete-page':
			return {...state, FormObject: action.payload}
		case 'received-object-portfolio-card-delete-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-portfolio-card-delete-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-portfolio-card-delete-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-portfolio-card-delete-page',
	ReceivedObject: 'received-object-portfolio-card-delete-page',
	RequiredObject: 'required-object-portfolio-card-delete-page',
	ExtraObject: 'extra-object-portfolio-card-delete-page',
}  

export default PortfolioCardDeletePageState