const InitialState = {
	A: "Bro... Inside MenuCreatePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const MenuCreatePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-menu-create-page':
			return {...state, FormObject: action.payload}
		case 'received-object-menu-create-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-menu-create-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-menu-create-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-menu-create-page',
	ReceivedObject: 'received-object-menu-create-page',
	RequiredObject: 'required-object-menu-create-page',
	ExtraObject: 'extra-object-menu-create-page',
}  

export default MenuCreatePageState