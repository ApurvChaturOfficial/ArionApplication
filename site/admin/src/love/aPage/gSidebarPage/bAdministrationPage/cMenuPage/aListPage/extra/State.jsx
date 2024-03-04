const InitialState = {
	A: "Bro... Inside MenuListPageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const MenuListPageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-menu-list-page':
			return {...state, FormObject: action.payload}
		case 'received-object-menu-list-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-menu-list-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-menu-list-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-menu-list-page',
	ReceivedObject: 'received-object-menu-list-page',
	RequiredObject: 'required-object-menu-list-page',
	ExtraObject: 'extra-object-menu-list-page',
}  

export default MenuListPageState