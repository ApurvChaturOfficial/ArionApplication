const InitialState = {
	A: "Bro... Inside ProjectUpdatePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const ProjectUpdatePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-project-update-page':
			return {...state, FormObject: action.payload}
		case 'received-object-project-update-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-project-update-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-project-update-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-project-update-page',
	ReceivedObject: 'received-object-project-update-page',
	RequiredObject: 'required-object-project-update-page',
	ExtraObject: 'extra-object-project-update-page',
}  

export default ProjectUpdatePageState