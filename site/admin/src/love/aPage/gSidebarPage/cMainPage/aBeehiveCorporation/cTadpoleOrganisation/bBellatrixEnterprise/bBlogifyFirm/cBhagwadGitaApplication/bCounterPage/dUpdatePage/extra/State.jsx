const InitialState = {
	A: "Bro... Inside CounterUpdatePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const CounterUpdatePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-counter-update-page':
			return {...state, FormObject: action.payload}
		case 'received-object-counter-update-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-counter-update-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-counter-update-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-counter-update-page',
	ReceivedObject: 'received-object-counter-update-page',
	RequiredObject: 'required-object-counter-update-page',
	ExtraObject: 'extra-object-counter-update-page',
}  

export default CounterUpdatePageState