const InitialState = {
	A: "Bro... Inside ProjectListPageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const ProjectListPageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-project-list-page':
			return {...state, FormObject: action.payload}
		case 'received-object-project-list-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-project-list-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-project-list-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-project-list-page',
	ReceivedObject: 'received-object-project-list-page',
	RequiredObject: 'required-object-project-list-page',
	ExtraObject: 'extra-object-project-list-page',
}  

export default ProjectListPageState