const InitialState = {
	A: "Bro... Inside ProjectSectionCreatePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const ProjectSectionCreatePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-project-section-create-page':
			return {...state, FormObject: action.payload}
		case 'received-object-project-section-create-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-project-section-create-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-project-section-create-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-project-section-create-page',
	ReceivedObject: 'received-object-project-section-create-page',
	RequiredObject: 'required-object-project-section-create-page',
	ExtraObject: 'extra-object-project-section-create-page',
}  

export default ProjectSectionCreatePageState