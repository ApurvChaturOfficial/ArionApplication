const InitialState = {
	A: "Bro... Inside ProgramUpdatePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const ProgramUpdatePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-program-update-page':
			return {...state, FormObject: action.payload}
		case 'received-object-program-update-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-program-update-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-program-update-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-program-update-page',
	ReceivedObject: 'received-object-program-update-page',
	RequiredObject: 'required-object-program-update-page',
	ExtraObject: 'extra-object-program-update-page',
}  

export default ProgramUpdatePageState