const InitialState = {
	A: "Bro... Inside UserDeletePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const UserDeletePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-base-delete-page':
			return {...state, FormObject: action.payload}
		case 'received-object-base-delete-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-base-delete-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-base-delete-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-base-delete-page',
	ReceivedObject: 'received-object-base-delete-page',
	RequiredObject: 'required-object-base-delete-page',
	ExtraObject: 'extra-object-base-delete-page',
}  

export default UserDeletePageState