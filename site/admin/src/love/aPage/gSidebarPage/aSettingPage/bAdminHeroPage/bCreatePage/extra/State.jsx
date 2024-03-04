const InitialState = {
	A: "Bro... Inside AdminHeroCreatePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const AdminHeroCreatePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-admin-hero-create-page':
			return {...state, FormObject: action.payload}
		case 'received-object-admin-hero-create-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-admin-hero-create-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-admin-hero-create-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-admin-hero-create-page',
	ReceivedObject: 'received-object-admin-hero-create-page',
	RequiredObject: 'required-object-admin-hero-create-page',
	ExtraObject: 'extra-object-admin-hero-create-page',
}  

export default AdminHeroCreatePageState