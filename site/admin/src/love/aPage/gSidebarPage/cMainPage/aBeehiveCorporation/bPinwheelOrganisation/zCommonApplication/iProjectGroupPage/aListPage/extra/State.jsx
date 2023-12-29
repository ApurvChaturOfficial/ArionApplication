const InitialState = {
	A: "Bro... Inside ProjectGroupListPageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const ProjectGroupListPageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-project-group-list-page':
			return {...state, FormObject: action.payload}
		case 'received-object-project-group-list-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-project-group-list-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-project-group-list-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-project-group-list-page',
	ReceivedObject: 'received-object-project-group-list-page',
	RequiredObject: 'required-object-project-group-list-page',
	ExtraObject: 'extra-object-project-group-list-page',
}  

export default ProjectGroupListPageState