const InitialState = {
	A: "Bro... Inside ExperienceRetrievePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const ExperienceRetrievePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-experience-retrieve-page':
			return {...state, FormObject: action.payload}
		case 'received-object-experience-retrieve-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-experience-retrieve-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-experience-retrieve-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-experience-retrieve-page',
	ReceivedObject: 'received-object-experience-retrieve-page',
	RequiredObject: 'required-object-experience-retrieve-page',
	ExtraObject: 'extra-object-experience-retrieve-page',
}  

export default ExperienceRetrievePageState