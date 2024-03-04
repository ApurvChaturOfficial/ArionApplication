const InitialState = {
	A: "Bro... Inside UserCreatePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const UserCreatePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-user-create-page':
			return {...state, FormObject: action.payload}
		case 'received-object-user-create-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-user-create-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-user-create-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-user-create-page',
	ReceivedObject: 'received-object-user-create-page',
	RequiredObject: 'required-object-user-create-page',
	ExtraObject: 'extra-object-user-create-page',
}  

export default UserCreatePageState