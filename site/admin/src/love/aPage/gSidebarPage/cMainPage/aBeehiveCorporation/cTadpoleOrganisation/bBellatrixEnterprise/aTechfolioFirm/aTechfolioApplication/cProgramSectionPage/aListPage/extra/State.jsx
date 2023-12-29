const InitialState = {
	A: "Bro... Inside ProgramSectionListPageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const ProgramSectionListPageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-program-section-list-page':
			return {...state, FormObject: action.payload}
		case 'received-object-program-section-list-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-program-section-list-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-program-section-list-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-program-section-list-page',
	ReceivedObject: 'received-object-program-section-list-page',
	RequiredObject: 'required-object-program-section-list-page',
	ExtraObject: 'extra-object-program-section-list-page',
}  

export default ProgramSectionListPageState