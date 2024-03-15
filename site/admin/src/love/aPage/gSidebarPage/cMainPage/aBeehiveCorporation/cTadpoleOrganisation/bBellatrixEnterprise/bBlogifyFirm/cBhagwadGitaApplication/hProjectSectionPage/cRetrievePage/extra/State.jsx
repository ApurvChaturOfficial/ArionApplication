const InitialState = {
	A: "Bro... Inside ProjectSectionRetrievePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const ProjectSectionRetrievePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-project-section-retrieve-page':
			return {...state, FormObject: action.payload}
		case 'received-object-project-section-retrieve-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-project-section-retrieve-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-project-section-retrieve-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-project-section-retrieve-page',
	ReceivedObject: 'received-object-project-section-retrieve-page',
	RequiredObject: 'required-object-project-section-retrieve-page',
	ExtraObject: 'extra-object-project-section-retrieve-page',
}  

export default ProjectSectionRetrievePageState