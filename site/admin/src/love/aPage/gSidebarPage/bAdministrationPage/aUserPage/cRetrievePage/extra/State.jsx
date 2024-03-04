const InitialState = {
	A: "Bro... Inside UserRetrievePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const UserRetrievePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-user-retrieve-page':
			return {...state, FormObject: action.payload}
		case 'received-object-user-retrieve-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-user-retrieve-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-user-retrieve-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-user-retrieve-page',
	ReceivedObject: 'received-object-user-retrieve-page',
	RequiredObject: 'required-object-user-retrieve-page',
	ExtraObject: 'extra-object-user-retrieve-page',
}  

export default UserRetrievePageState