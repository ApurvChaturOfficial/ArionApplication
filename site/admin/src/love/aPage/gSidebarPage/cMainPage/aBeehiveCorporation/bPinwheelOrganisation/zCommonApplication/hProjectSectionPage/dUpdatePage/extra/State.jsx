const InitialState = {
	A: "Bro... Inside ProjectSectionUpdatePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const ProjectSectionUpdatePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-project-section-update-page':
			return {...state, FormObject: action.payload}
		case 'received-object-project-section-update-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-project-section-update-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-project-section-update-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-project-section-update-page',
	ReceivedObject: 'received-object-project-section-update-page',
	RequiredObject: 'required-object-project-section-update-page',
	ExtraObject: 'extra-object-project-section-update-page',
}  

export default ProjectSectionUpdatePageState