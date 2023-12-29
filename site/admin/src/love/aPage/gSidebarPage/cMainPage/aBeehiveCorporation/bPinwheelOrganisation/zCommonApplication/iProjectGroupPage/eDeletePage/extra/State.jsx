const InitialState = {
	A: "Bro... Inside ProjectGroupDeletePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const ProjectGroupDeletePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-project-group-delete-page':
			return {...state, FormObject: action.payload}
		case 'received-object-project-group-delete-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-project-group-delete-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-project-group-delete-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-project-group-delete-page',
	ReceivedObject: 'received-object-project-group-delete-page',
	RequiredObject: 'required-object-project-group-delete-page',
	ExtraObject: 'extra-object-project-group-delete-page',
}  

export default ProjectGroupDeletePageState