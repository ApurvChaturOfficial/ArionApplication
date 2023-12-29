const InitialState = {
	A: "Bro... Inside ProgramSectionCreatePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const ProgramSectionCreatePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-program-section-create-page':
			return {...state, FormObject: action.payload}
		case 'received-object-program-section-create-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-program-section-create-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-program-section-create-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-program-section-create-page',
	ReceivedObject: 'received-object-program-section-create-page',
	RequiredObject: 'required-object-program-section-create-page',
	ExtraObject: 'extra-object-program-section-create-page',
}  

export default ProgramSectionCreatePageState