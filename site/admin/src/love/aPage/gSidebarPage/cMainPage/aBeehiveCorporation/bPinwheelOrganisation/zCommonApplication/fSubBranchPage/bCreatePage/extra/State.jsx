const InitialState = {
	A: "Bro... Inside SubBranchCreatePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const SubBranchCreatePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-sub-branch-create-page':
			return {...state, FormObject: action.payload}
		case 'received-object-sub-branch-create-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-sub-branch-create-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-sub-branch-create-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-sub-branch-create-page',
	ReceivedObject: 'received-object-sub-branch-create-page',
	RequiredObject: 'required-object-sub-branch-create-page',
	ExtraObject: 'extra-object-sub-branch-create-page',
}  

export default SubBranchCreatePageState