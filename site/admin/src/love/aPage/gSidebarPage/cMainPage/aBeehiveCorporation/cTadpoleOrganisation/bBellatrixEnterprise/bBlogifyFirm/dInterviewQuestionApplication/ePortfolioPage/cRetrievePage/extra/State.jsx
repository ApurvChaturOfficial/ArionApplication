const InitialState = {
	A: "Bro... Inside PortfolioRetrievePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const PortfolioRetrievePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-portfolio-retrieve-page':
			return {...state, FormObject: action.payload}
		case 'received-object-portfolio-retrieve-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-portfolio-retrieve-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-portfolio-retrieve-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-portfolio-retrieve-page',
	ReceivedObject: 'received-object-portfolio-retrieve-page',
	RequiredObject: 'required-object-portfolio-retrieve-page',
	ExtraObject: 'extra-object-portfolio-retrieve-page',
}  

export default PortfolioRetrievePageState