const InitialState = {
	A: "Bro... Inside ProgramListPageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const ProgramListPageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-program-list-page':
			return {...state, FormObject: action.payload}
		case 'received-object-program-list-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-program-list-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-program-list-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-program-list-page',
	ReceivedObject: 'received-object-program-list-page',
	RequiredObject: 'required-object-program-list-page',
	ExtraObject: 'extra-object-program-list-page',
}  

export default ProgramListPageState