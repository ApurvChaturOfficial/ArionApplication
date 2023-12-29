const InitialState = {
	A: "Bro... Inside ProjectSectionListPageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const ProjectSectionListPageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-project-section-list-page':
			return {...state, FormObject: action.payload}
		case 'received-object-project-section-list-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-project-section-list-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-project-section-list-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-project-section-list-page',
	ReceivedObject: 'received-object-project-section-list-page',
	RequiredObject: 'required-object-project-section-list-page',
	ExtraObject: 'extra-object-project-section-list-page',
}  

export default ProjectSectionListPageState