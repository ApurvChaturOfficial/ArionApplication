const InitialState = {
	A: "Bro... Inside ExperienceDeletePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const ExperienceDeletePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-experience-delete-page':
			return {...state, FormObject: action.payload}
		case 'received-object-experience-delete-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-experience-delete-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-experience-delete-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-experience-delete-page',
	ReceivedObject: 'received-object-experience-delete-page',
	RequiredObject: 'required-object-experience-delete-page',
	ExtraObject: 'extra-object-experience-delete-page',
}  

export default ExperienceDeletePageState