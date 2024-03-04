const InitialState = {
	A: "Bro... Inside SubSubBranchUpdatePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const SubSubBranchUpdatePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-sub-sub-branch-update-page':
			return {...state, FormObject: action.payload}
		case 'received-object-sub-sub-branch-update-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-sub-sub-branch-update-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-sub-sub-branch-update-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-sub-sub-branch-update-page',
	ReceivedObject: 'received-object-sub-sub-branch-update-page',
	RequiredObject: 'required-object-sub-sub-branch-update-page',
	ExtraObject: 'extra-object-sub-sub-branch-update-page',
}  

export default SubSubBranchUpdatePageState