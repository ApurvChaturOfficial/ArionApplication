const InitialState = {
	A: "Bro... Inside AdminHeroUpdatePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const AdminHeroUpdatePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-admin-hero-update-page':
			return {...state, FormObject: action.payload}
		case 'received-object-admin-hero-update-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-admin-hero-update-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-admin-hero-update-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-admin-hero-update-page',
	ReceivedObject: 'received-object-admin-hero-update-page',
	RequiredObject: 'required-object-admin-hero-update-page',
	ExtraObject: 'extra-object-admin-hero-update-page',
}  

export default AdminHeroUpdatePageState