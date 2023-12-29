const InitialState = {
	A: "Bro... Inside BaseCreatePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const BaseCreatePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-base-create-page':
			return {...state, FormObject: action.payload}
		case 'received-object-base-create-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-base-create-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-base-create-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-base-create-page',
	ReceivedObject: 'received-object-base-create-page',
	RequiredObject: 'required-object-base-create-page',
	ExtraObject: 'extra-object-base-create-page',
}  

export default BaseCreatePageState