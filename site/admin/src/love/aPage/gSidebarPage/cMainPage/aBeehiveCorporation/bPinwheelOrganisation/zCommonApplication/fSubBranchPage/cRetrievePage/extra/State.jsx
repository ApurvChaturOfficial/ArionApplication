const InitialState = {
	A: "Bro... Inside SubBranchRetrievePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const SubBranchRetrievePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-sub-branch-retrieve-page':
			return {...state, FormObject: action.payload}
		case 'received-object-sub-branch-retrieve-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-sub-branch-retrieve-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-sub-branch-retrieve-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-sub-branch-retrieve-page',
	ReceivedObject: 'received-object-sub-branch-retrieve-page',
	RequiredObject: 'required-object-sub-branch-retrieve-page',
	ExtraObject: 'extra-object-sub-branch-retrieve-page',
}  

export default SubBranchRetrievePageState