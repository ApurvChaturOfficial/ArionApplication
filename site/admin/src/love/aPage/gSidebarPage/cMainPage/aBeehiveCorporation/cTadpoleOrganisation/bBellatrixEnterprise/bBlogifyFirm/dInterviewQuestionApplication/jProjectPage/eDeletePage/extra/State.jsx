const InitialState = {
	A: "Bro... Inside ProjectDeletePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const ProjectDeletePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-project-delete-page':
			return {...state, FormObject: action.payload}
		case 'received-object-project-delete-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-project-delete-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-project-delete-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-project-delete-page',
	ReceivedObject: 'received-object-project-delete-page',
	RequiredObject: 'required-object-project-delete-page',
	ExtraObject: 'extra-object-project-delete-page',
}  

export default ProjectDeletePageState