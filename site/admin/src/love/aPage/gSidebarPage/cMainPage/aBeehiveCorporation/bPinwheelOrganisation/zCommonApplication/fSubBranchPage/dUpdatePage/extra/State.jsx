const InitialState = {
	A: "Bro... Inside SubBranchUpdatePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const SubBranchUpdatePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-sub-branch-update-page':
			return {...state, FormObject: action.payload}
		case 'received-object-sub-branch-update-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-sub-branch-update-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-sub-branch-update-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-sub-branch-update-page',
	ReceivedObject: 'received-object-sub-branch-update-page',
	RequiredObject: 'required-object-sub-branch-update-page',
	ExtraObject: 'extra-object-sub-branch-update-page',
}  

export default SubBranchUpdatePageState