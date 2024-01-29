const InitialState = {
	A: "Bro... Inside AdminHeroDeletePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const AdminHeroDeletePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-admin-hero-delete-page':
			return {...state, FormObject: action.payload}
		case 'received-object-admin-hero-delete-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-admin-hero-delete-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-admin-hero-delete-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-admin-hero-delete-page',
	ReceivedObject: 'received-object-admin-hero-delete-page',
	RequiredObject: 'required-object-admin-hero-delete-page',
	ExtraObject: 'extra-object-admin-hero-delete-page',
}  

export default AdminHeroDeletePageState