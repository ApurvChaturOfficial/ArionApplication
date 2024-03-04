const InitialState = {
	A: "Bro... Inside RoleUpdatePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const RoleUpdatePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-role-update-page':
			return {...state, FormObject: action.payload}
		case 'received-object-role-update-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-role-update-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-role-update-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-role-update-page',
	ReceivedObject: 'received-object-role-update-page',
	RequiredObject: 'required-object-role-update-page',
	ExtraObject: 'extra-object-role-update-page',
}  

export default RoleUpdatePageState