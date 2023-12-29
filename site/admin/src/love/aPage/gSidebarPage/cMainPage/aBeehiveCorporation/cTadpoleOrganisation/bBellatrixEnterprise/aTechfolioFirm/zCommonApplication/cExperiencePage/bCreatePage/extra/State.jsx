const InitialState = {
	A: "Bro... Inside ExperienceCreatePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const ExperienceCreatePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-experience-create-page':
			return {...state, FormObject: action.payload}
		case 'received-object-experience-create-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-experience-create-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-experience-create-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-experience-create-page',
	ReceivedObject: 'received-object-experience-create-page',
	RequiredObject: 'required-object-experience-create-page',
	ExtraObject: 'extra-object-experience-create-page',
}  

export default ExperienceCreatePageState