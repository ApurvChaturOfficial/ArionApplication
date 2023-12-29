const InitialState = {
	A: "Bro... Inside CounterDeletePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const CounterDeletePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-counter-delete-page':
			return {...state, FormObject: action.payload}
		case 'received-object-counter-delete-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-counter-delete-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-counter-delete-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-counter-delete-page',
	ReceivedObject: 'received-object-counter-delete-page',
	RequiredObject: 'required-object-counter-delete-page',
	ExtraObject: 'extra-object-counter-delete-page',
}  

export default CounterDeletePageState