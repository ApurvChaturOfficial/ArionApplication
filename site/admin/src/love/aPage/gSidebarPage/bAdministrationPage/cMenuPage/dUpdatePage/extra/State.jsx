const InitialState = {
	A: "Bro... Inside MenuUpdatePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const MenuUpdatePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-base-update-page':
			return {...state, FormObject: action.payload}
		case 'received-object-base-update-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-base-update-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-base-update-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-base-update-page',
	ReceivedObject: 'received-object-base-update-page',
	RequiredObject: 'required-object-base-update-page',
	ExtraObject: 'extra-object-base-update-page',
}  

export default MenuUpdatePageState