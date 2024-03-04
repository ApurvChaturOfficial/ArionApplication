const InitialState = {
	A: "Bro... Inside BaseRetrievePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const BaseRetrievePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-base-retrieve-page':
			return {...state, FormObject: action.payload}
		case 'received-object-base-retrieve-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-base-retrieve-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-base-retrieve-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-base-retrieve-page',
	ReceivedObject: 'received-object-base-retrieve-page',
	RequiredObject: 'required-object-base-retrieve-page',
	ExtraObject: 'extra-object-base-retrieve-page',
}  

export default BaseRetrievePageState