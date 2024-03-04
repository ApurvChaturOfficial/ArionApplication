const InitialState = {
	A: "Bro... Inside RoleRetrievePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const RoleRetrievePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-role-retrieve-page':
			return {...state, FormObject: action.payload}
		case 'received-object-role-retrieve-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-role-retrieve-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-role-retrieve-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-role-retrieve-page',
	ReceivedObject: 'received-object-role-retrieve-page',
	RequiredObject: 'required-object-role-retrieve-page',
	ExtraObject: 'extra-object-role-retrieve-page',
}  

export default RoleRetrievePageState