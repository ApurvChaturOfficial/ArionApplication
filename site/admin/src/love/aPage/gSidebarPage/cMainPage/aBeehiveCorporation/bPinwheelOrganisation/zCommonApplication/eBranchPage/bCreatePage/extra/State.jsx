const InitialState = {
	A: "Bro... Inside BranchCreatePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const BranchCreatePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-branch-create-page':
			return {...state, FormObject: action.payload}
		case 'received-object-branch-create-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-branch-create-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-branch-create-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-branch-create-page',
	ReceivedObject: 'received-object-branch-create-page',
	RequiredObject: 'required-object-branch-create-page',
	ExtraObject: 'extra-object-branch-create-page',
}  

export default BranchCreatePageState