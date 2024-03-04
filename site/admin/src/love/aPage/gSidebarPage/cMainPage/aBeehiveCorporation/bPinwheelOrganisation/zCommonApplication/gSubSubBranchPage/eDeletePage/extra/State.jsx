const InitialState = {
	A: "Bro... Inside SubSubBranchDeletePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const SubSubBranchDeletePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-sub-sub-branch-delete-page':
			return {...state, FormObject: action.payload}
		case 'received-object-sub-sub-branch-delete-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-sub-sub-branch-delete-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-sub-sub-branch-delete-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-sub-sub-branch-delete-page',
	ReceivedObject: 'received-object-sub-sub-branch-delete-page',
	RequiredObject: 'required-object-sub-sub-branch-delete-page',
	ExtraObject: 'extra-object-sub-sub-branch-delete-page',
}  

export default SubSubBranchDeletePageState