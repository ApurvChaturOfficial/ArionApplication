const InitialState = {
	A: "Bro... Inside ExperienceUpdatePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const ExperienceUpdatePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-experience-update-page':
			return {...state, FormObject: action.payload}
		case 'received-object-experience-update-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-experience-update-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-experience-update-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-experience-update-page',
	ReceivedObject: 'received-object-experience-update-page',
	RequiredObject: 'required-object-experience-update-page',
	ExtraObject: 'extra-object-experience-update-page',
}  

export default ExperienceUpdatePageState