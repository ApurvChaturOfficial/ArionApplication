const InitialState = {
	A: "Bro... Inside ProjectGroupCreatePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const ProjectGroupCreatePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-project-group-create-page':
			return {...state, FormObject: action.payload}
		case 'received-object-project-group-create-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-project-group-create-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-project-group-create-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-project-group-create-page',
	ReceivedObject: 'received-object-project-group-create-page',
	RequiredObject: 'required-object-project-group-create-page',
	ExtraObject: 'extra-object-project-group-create-page',
}  

export default ProjectGroupCreatePageState