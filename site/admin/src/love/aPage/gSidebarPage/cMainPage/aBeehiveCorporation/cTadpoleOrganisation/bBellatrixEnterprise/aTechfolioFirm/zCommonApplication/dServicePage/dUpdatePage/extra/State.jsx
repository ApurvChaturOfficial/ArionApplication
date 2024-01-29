const InitialState = {
	A: "Bro... Inside ServiceUpdatePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const ServiceUpdatePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-service-update-page':
			return {...state, FormObject: action.payload}
		case 'received-object-service-update-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-service-update-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-service-update-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-service-update-page',
	ReceivedObject: 'received-object-service-update-page',
	RequiredObject: 'required-object-service-update-page',
	ExtraObject: 'extra-object-service-update-page',
}  

export default ServiceUpdatePageState