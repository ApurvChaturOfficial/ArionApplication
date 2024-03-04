const InitialState = {
	A: "Bro... Inside ProgramSectionDeletePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const ProgramSectionDeletePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-program-section-delete-page':
			return {...state, FormObject: action.payload}
		case 'received-object-program-section-delete-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-program-section-delete-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-program-section-delete-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-program-section-delete-page',
	ReceivedObject: 'received-object-program-section-delete-page',
	RequiredObject: 'required-object-program-section-delete-page',
	ExtraObject: 'extra-object-program-section-delete-page',
}  

export default ProgramSectionDeletePageState