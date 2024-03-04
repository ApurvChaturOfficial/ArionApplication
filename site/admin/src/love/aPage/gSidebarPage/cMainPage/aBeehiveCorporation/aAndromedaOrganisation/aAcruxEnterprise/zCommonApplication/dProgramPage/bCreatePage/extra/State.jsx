const InitialState = {
	A: "Bro... Inside ProgramCreatePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const ProgramCreatePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-program-create-page':
			return {...state, FormObject: action.payload}
		case 'received-object-program-create-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-program-create-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-program-create-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-program-create-page',
	ReceivedObject: 'received-object-program-create-page',
	RequiredObject: 'required-object-program-create-page',
	ExtraObject: 'extra-object-program-create-page',
}  

export default ProgramCreatePageState