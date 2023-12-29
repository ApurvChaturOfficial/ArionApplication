const InitialState = {
	A: "Bro... Inside ServiceCreatePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const ServiceCreatePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-service-create-page':
			return {...state, FormObject: action.payload}
		case 'received-object-service-create-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-service-create-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-service-create-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-service-create-page',
	ReceivedObject: 'received-object-service-create-page',
	RequiredObject: 'required-object-service-create-page',
	ExtraObject: 'extra-object-service-create-page',
}  

export default ServiceCreatePageState