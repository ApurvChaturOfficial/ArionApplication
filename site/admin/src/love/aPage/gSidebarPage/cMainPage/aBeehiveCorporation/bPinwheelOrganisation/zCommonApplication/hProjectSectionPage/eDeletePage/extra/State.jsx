const InitialState = {
	A: "Bro... Inside ProjectSectionDeletePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const ProjectSectionDeletePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-branch-delete-page':
			return {...state, FormObject: action.payload}
		case 'received-object-branch-delete-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-branch-delete-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-branch-delete-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-branch-delete-page',
	ReceivedObject: 'received-object-branch-delete-page',
	RequiredObject: 'required-object-branch-delete-page',
	ExtraObject: 'extra-object-branch-delete-page',
}  

export default ProjectSectionDeletePageState