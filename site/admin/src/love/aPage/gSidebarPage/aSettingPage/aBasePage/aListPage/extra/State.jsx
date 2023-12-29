const InitialState = {
	A: "Bro... Inside BaseListPageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const BaseListPageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-base-list-page':
			return {...state, FormObject: action.payload}
		case 'received-object-base-list-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-base-list-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-base-list-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-base-list-page',
	ReceivedObject: 'received-object-base-list-page',
	RequiredObject: 'required-object-base-list-page',
	ExtraObject: 'extra-object-base-list-page',
}  

export default BaseListPageState