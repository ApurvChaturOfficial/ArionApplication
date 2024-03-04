const InitialState = {
	A: "Bro... Inside BranchUpdatePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const BranchUpdatePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-branch-update-page':
			return {...state, FormObject: action.payload}
		case 'received-object-branch-update-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-branch-update-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-branch-update-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-branch-update-page',
	ReceivedObject: 'received-object-branch-update-page',
	RequiredObject: 'required-object-branch-update-page',
	ExtraObject: 'extra-object-branch-update-page',
}  

export default BranchUpdatePageState