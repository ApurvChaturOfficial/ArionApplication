const InitialState = {
	A: "Bro... Inside ProgramSectionRetrievePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const ProgramSectionRetrievePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-program-section-retrieve-page':
			return {...state, FormObject: action.payload}
		case 'received-object-program-section-retrieve-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-program-section-retrieve-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-program-section-retrieve-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-program-section-retrieve-page',
	ReceivedObject: 'received-object-program-section-retrieve-page',
	RequiredObject: 'required-object-program-section-retrieve-page',
	ExtraObject: 'extra-object-program-section-retrieve-page',
}  

export default ProgramSectionRetrievePageState