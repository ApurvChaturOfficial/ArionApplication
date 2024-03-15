const InitialState = {
	A: "Bro... Inside CounterListPageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const CounterListPageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-counter-list-page':
			return {...state, FormObject: action.payload}
		case 'received-object-counter-list-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-counter-list-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-counter-list-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-counter-list-page',
	ReceivedObject: 'received-object-counter-list-page',
	RequiredObject: 'required-object-counter-list-page',
	ExtraObject: 'extra-object-counter-list-page',
}  

export default CounterListPageState