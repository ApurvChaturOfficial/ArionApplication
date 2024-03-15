const InitialState = {
	A: "Bro... Inside CounterCreatePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const CounterCreatePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-counter-create-page':
			return {...state, FormObject: action.payload}
		case 'received-object-counter-create-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-counter-create-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-counter-create-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-counter-create-page',
	ReceivedObject: 'received-object-counter-create-page',
	RequiredObject: 'required-object-counter-create-page',
	ExtraObject: 'extra-object-counter-create-page',
}  

export default CounterCreatePageState