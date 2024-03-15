const InitialState = {
	A: "Bro... Inside ProjectCreatePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const ProjectCreatePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-project-create-page':
			return {...state, FormObject: action.payload}
		case 'received-object-project-create-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-project-create-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-project-create-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-project-create-page',
	ReceivedObject: 'received-object-project-create-page',
	RequiredObject: 'required-object-project-create-page',
	ExtraObject: 'extra-object-project-create-page',
}  

export default ProjectCreatePageState