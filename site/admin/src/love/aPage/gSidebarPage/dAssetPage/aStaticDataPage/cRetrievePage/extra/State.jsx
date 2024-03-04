const InitialState = {
	A: "Bro... Inside StaticDataRetrievePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const StaticDataRetrievePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-static-data-retrieve-page':
			return {...state, FormObject: action.payload}
		case 'received-object-static-data-retrieve-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-static-data-retrieve-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-static-data-retrieve-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-static-data-retrieve-page',
	ReceivedObject: 'received-object-static-data-retrieve-page',
	RequiredObject: 'required-object-static-data-retrieve-page',
	ExtraObject: 'extra-object-static-data-retrieve-page',
}  

export default StaticDataRetrievePageState