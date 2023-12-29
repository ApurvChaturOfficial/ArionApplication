const InitialState = {
	A: "Bro... Inside ServiceRetrievePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const ServiceRetrievePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-service-retrieve-page':
			return {...state, FormObject: action.payload}
		case 'received-object-service-retrieve-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-service-retrieve-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-service-retrieve-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-service-retrieve-page',
	ReceivedObject: 'received-object-service-retrieve-page',
	RequiredObject: 'required-object-service-retrieve-page',
	ExtraObject: 'extra-object-service-retrieve-page',
}  

export default ServiceRetrievePageState