const InitialState = {
	A: "Bro... Inside ProjectGroupUpdatePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const ProjectGroupUpdatePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-project-group-update-page':
			return {...state, FormObject: action.payload}
		case 'received-object-project-group-update-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-project-group-update-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-project-group-update-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-project-group-update-page',
	ReceivedObject: 'received-object-project-group-update-page',
	RequiredObject: 'required-object-project-group-update-page',
	ExtraObject: 'extra-object-project-group-update-page',
}  

export default ProjectGroupUpdatePageState