const InitialState = {
	A: "Bro... Inside UserListPageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const UserListPageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-user-list-page':
			return {...state, FormObject: action.payload}
		case 'received-object-user-list-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-user-list-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-user-list-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-user-list-page',
	ReceivedObject: 'received-object-user-list-page',
	RequiredObject: 'required-object-user-list-page',
	ExtraObject: 'extra-object-user-list-page',
}  

export default UserListPageState