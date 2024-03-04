const InitialState = {
	A: "Bro... Inside MenuRetrievePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const MenuRetrievePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-menu-retrieve-page':
			return {...state, FormObject: action.payload}
		case 'received-object-menu-retrieve-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-menu-retrieve-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-menu-retrieve-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-menu-retrieve-page',
	ReceivedObject: 'received-object-menu-retrieve-page',
	RequiredObject: 'required-object-menu-retrieve-page',
	ExtraObject: 'extra-object-menu-retrieve-page',
}  

export default MenuRetrievePageState