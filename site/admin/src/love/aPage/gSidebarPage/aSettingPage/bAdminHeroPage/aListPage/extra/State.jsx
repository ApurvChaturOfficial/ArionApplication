const InitialState = {
	A: "Bro... Inside AdminHeroListPageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const AdminHeroListPageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-admin-hero-list-page':
			return {...state, FormObject: action.payload}
		case 'received-object-admin-hero-list-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-admin-hero-list-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-admin-hero-list-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-admin-hero-list-page',
	ReceivedObject: 'received-object-admin-hero-list-page',
	RequiredObject: 'required-object-admin-hero-list-page',
	ExtraObject: 'extra-object-admin-hero-list-page',
}  

export default AdminHeroListPageState