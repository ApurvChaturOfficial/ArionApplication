const InitialState = {
	A: "Bro... Inside Experience",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const Experience = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-experience-list-page':
			return {...state, FormObject: action.payload}
		case 'received-object-experience-list-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-experience-list-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-experience-list-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-experience-list-page',
	ReceivedObject: 'received-object-experience-list-page',
	RequiredObject: 'required-object-experience-list-page',
	ExtraObject: 'extra-object-experience-list-page',
}  

export default Experience