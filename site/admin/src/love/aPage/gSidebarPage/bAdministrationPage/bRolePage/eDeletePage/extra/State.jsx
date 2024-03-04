const InitialState = {
	A: "Bro... Inside RoleDeletePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const RoleDeletePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-role-delete-page':
			return {...state, FormObject: action.payload}
		case 'received-object-role-delete-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-role-delete-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-role-delete-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-role-delete-page',
	ReceivedObject: 'received-object-role-delete-page',
	RequiredObject: 'required-object-role-delete-page',
	ExtraObject: 'extra-object-role-delete-page',
}  

export default RoleDeletePageState