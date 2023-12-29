const InitialState = {
	A: "Bro... Inside ProgramRetrievePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const ProgramRetrievePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-program-retrieve-page':
			return {...state, FormObject: action.payload}
		case 'received-object-program-retrieve-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-program-retrieve-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-program-retrieve-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-program-retrieve-page',
	ReceivedObject: 'received-object-program-retrieve-page',
	RequiredObject: 'required-object-program-retrieve-page',
	ExtraObject: 'extra-object-program-retrieve-page',
}  

export default ProgramRetrievePageState