const InitialState = {
	A: "Bro... Inside SubSubBranchCreatePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const SubSubBranchCreatePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-sub-sub-branch-create-page':
			return {...state, FormObject: action.payload}
		case 'received-object-sub-sub-branch-create-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-sub-sub-branch-create-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-sub-sub-branch-create-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-sub-sub-branch-create-page',
	ReceivedObject: 'received-object-sub-sub-branch-create-page',
	RequiredObject: 'required-object-sub-sub-branch-create-page',
	ExtraObject: 'extra-object-sub-sub-branch-create-page',
}  

export default SubSubBranchCreatePageState