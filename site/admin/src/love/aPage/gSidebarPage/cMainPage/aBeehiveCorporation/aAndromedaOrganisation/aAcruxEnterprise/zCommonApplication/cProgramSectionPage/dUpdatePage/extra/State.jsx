const InitialState = {
	A: "Bro... Inside ProgramSectionUpdatePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const ProgramSectionUpdatePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-program-section-update-page':
			return {...state, FormObject: action.payload}
		case 'received-object-program-section-update-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-program-section-update-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-program-section-update-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-program-section-update-page',
	ReceivedObject: 'received-object-program-section-update-page',
	RequiredObject: 'required-object-program-section-update-page',
	ExtraObject: 'extra-object-program-section-update-page',
}  

export default ProgramSectionUpdatePageState