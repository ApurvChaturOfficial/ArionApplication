const InitialState = {
	A: "Bro... Inside ProjectRetrievePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const ProjectRetrievePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-project-retrieve-page':
			return {...state, FormObject: action.payload}
		case 'received-object-project-retrieve-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-project-retrieve-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-project-retrieve-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-project-retrieve-page',
	ReceivedObject: 'received-object-project-retrieve-page',
	RequiredObject: 'required-object-project-retrieve-page',
	ExtraObject: 'extra-object-project-retrieve-page',
}  

export default ProjectRetrievePageState