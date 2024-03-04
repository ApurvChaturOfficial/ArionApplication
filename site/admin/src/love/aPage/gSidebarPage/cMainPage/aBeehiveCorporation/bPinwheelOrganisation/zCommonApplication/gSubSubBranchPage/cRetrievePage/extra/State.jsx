const InitialState = {
	A: "Bro... Inside SubSubBranchRetrievePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const SubSubBranchRetrievePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-sub-sub-branch-retrieve-page':
			return {...state, FormObject: action.payload}
		case 'received-object-sub-sub-branch-retrieve-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-sub-sub-branch-retrieve-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-sub-sub-branch-retrieve-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-sub-sub-branch-retrieve-page',
	ReceivedObject: 'received-object-sub-sub-branch-retrieve-page',
	RequiredObject: 'required-object-sub-sub-branch-retrieve-page',
	ExtraObject: 'extra-object-sub-sub-branch-retrieve-page',
}  

export default SubSubBranchRetrievePageState