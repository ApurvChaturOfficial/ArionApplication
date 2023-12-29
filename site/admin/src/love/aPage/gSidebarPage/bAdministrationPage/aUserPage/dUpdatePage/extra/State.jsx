const InitialState = {
	A: "Bro... Inside UserUpdatePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const UserUpdatePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-user-update-page':
			return {...state, FormObject: action.payload}
		case 'received-object-user-update-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-user-update-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-user-update-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-user-update-page',
	ReceivedObject: 'received-object-user-update-page',
	RequiredObject: 'required-object-user-update-page',
	ExtraObject: 'extra-object-user-update-page',
}  

export default UserUpdatePageState