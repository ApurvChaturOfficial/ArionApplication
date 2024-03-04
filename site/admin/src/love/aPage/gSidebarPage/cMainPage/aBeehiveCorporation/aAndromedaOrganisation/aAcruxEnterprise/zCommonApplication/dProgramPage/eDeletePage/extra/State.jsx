const InitialState = {
	A: "Bro... Inside ProgramDeletePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const ProgramDeletePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-program-delete-page':
			return {...state, FormObject: action.payload}
		case 'received-object-program-delete-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-program-delete-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-program-delete-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-program-delete-page',
	ReceivedObject: 'received-object-program-delete-page',
	RequiredObject: 'required-object-program-delete-page',
	ExtraObject: 'extra-object-program-delete-page',
}  

export default ProgramDeletePageState