const InitialState = {
	A: "Bro... Inside BranchRetrievePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const BranchRetrievePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-branch-retrieve-page':
			return {...state, FormObject: action.payload}
		case 'received-object-branch-retrieve-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-branch-retrieve-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-branch-retrieve-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-branch-retrieve-page',
	ReceivedObject: 'received-object-branch-retrieve-page',
	RequiredObject: 'required-object-branch-retrieve-page',
	ExtraObject: 'extra-object-branch-retrieve-page',
}  

export default BranchRetrievePageState