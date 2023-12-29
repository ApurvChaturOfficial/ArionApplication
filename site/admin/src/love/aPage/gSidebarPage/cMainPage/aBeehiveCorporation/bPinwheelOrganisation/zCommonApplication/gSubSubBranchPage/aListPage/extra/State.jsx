const InitialState = {
	A: "Bro... Inside SubSubBranchListPageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const SubSubBranchListPageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-sub-sub-branch-list-page':
			return {...state, FormObject: action.payload}
		case 'received-object-sub-sub-branch-list-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-sub-sub-branch-list-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-sub-sub-branch-list-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-sub-sub-branch-list-page',
	ReceivedObject: 'received-object-sub-sub-branch-list-page',
	RequiredObject: 'required-object-sub-sub-branch-list-page',
	ExtraObject: 'extra-object-sub-sub-branch-list-page',
}  

export default SubSubBranchListPageState