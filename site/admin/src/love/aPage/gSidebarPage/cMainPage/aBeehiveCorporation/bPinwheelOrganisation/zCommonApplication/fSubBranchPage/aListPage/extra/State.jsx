const InitialState = {
	A: "Bro... Inside SubBranchListPageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const SubBranchListPageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-sub-branch-list-page':
			return {...state, FormObject: action.payload}
		case 'received-object-sub-branch-list-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-sub-branch-list-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-sub-branch-list-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-sub-branch-list-page',
	ReceivedObject: 'received-object-sub-branch-list-page',
	RequiredObject: 'required-object-sub-branch-list-page',
	ExtraObject: 'extra-object-sub-branch-list-page',
}  

export default SubBranchListPageState