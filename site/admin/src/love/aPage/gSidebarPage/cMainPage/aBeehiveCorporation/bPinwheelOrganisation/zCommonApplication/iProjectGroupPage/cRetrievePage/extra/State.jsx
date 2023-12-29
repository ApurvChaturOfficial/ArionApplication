const InitialState = {
	A: "Bro... Inside ProjectGroupRetrievePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const ProjectGroupRetrievePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-project-group-retrieve-page':
			return {...state, FormObject: action.payload}
		case 'received-object-project-group-retrieve-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-project-group-retrieve-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-project-group-retrieve-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-project-group-retrieve-page',
	ReceivedObject: 'received-object-project-group-retrieve-page',
	RequiredObject: 'required-object-project-group-retrieve-page',
	ExtraObject: 'extra-object-project-group-retrieve-page',
}  

export default ProjectGroupRetrievePageState