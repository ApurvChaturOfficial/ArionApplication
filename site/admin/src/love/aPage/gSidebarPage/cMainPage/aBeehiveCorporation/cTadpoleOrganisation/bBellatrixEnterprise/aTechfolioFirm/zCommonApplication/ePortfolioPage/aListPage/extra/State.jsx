const InitialState = {
	A: "Bro... Inside PortfolioListPageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const PortfolioListPageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-portfolio-list-page':
			return {...state, FormObject: action.payload}
		case 'received-object-portfolio-list-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-portfolio-list-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-portfolio-list-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-portfolio-list-page',
	ReceivedObject: 'received-object-portfolio-list-page',
	RequiredObject: 'required-object-portfolio-list-page',
	ExtraObject: 'extra-object-portfolio-list-page',
}  

export default PortfolioListPageState