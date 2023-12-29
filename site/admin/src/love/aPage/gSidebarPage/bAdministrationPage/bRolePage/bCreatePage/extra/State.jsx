const InitialState = {
	A: "Bro... Inside RoleCreatePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const RoleCreatePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-role-create-page':
			return {...state, FormObject: action.payload}
		case 'received-object-role-create-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-role-create-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-role-create-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-role-create-page',
	ReceivedObject: 'received-object-role-create-page',
	RequiredObject: 'required-object-role-create-page',
	ExtraObject: 'extra-object-role-create-page',
}  

export default RoleCreatePageState