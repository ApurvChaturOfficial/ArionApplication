const InitialState = {
	A: "Bro... Inside BranchListPageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const BranchListPageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-branch-list-page':
			return {...state, FormObject: action.payload}
		case 'received-object-branch-list-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-branch-list-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-branch-list-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-branch-list-page',
	ReceivedObject: 'received-object-branch-list-page',
	RequiredObject: 'required-object-branch-list-page',
	ExtraObject: 'extra-object-branch-list-page',
}  

export default BranchListPageState