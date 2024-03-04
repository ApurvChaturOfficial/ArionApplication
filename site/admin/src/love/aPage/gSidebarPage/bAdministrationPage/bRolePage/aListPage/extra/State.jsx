const InitialState = {
	A: "Bro... Inside RoleListPageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const RoleListPageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-role-list-page':
			return {...state, FormObject: action.payload}
		case 'received-object-role-list-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-role-list-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-role-list-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-role-list-page',
	ReceivedObject: 'received-object-role-list-page',
	RequiredObject: 'required-object-role-list-page',
	ExtraObject: 'extra-object-role-list-page',
}  

export default RoleListPageState