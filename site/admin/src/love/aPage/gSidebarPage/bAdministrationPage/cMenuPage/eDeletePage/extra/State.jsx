const InitialState = {
	A: "Bro... Inside MenuDeletePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const MenuDeletePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-menu-delete-page':
			return {...state, FormObject: action.payload}
		case 'received-object-menu-delete-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-menu-delete-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-menu-delete-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-menu-delete-page',
	ReceivedObject: 'received-object-menu-delete-page',
	RequiredObject: 'required-object-menu-delete-page',
	ExtraObject: 'extra-object-menu-delete-page',
}  

export default MenuDeletePageState