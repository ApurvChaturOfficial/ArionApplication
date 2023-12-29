const InitialState = {
	A: "Bro... Inside CounterRetrievePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const CounterRetrievePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-counter-retrieve-page':
			return {...state, FormObject: action.payload}
		case 'received-object-counter-retrieve-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-counter-retrieve-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-counter-retrieve-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-counter-retrieve-page',
	ReceivedObject: 'received-object-counter-retrieve-page',
	RequiredObject: 'required-object-counter-retrieve-page',
	ExtraObject: 'extra-object-counter-retrieve-page',
}  

export default CounterRetrievePageState