const InitialState = {
	A: "Bro... Inside ServiceDeletePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const ServiceDeletePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-service-delete-page':
			return {...state, FormObject: action.payload}
		case 'received-object-service-delete-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-service-delete-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-service-delete-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-service-delete-page',
	ReceivedObject: 'received-object-service-delete-page',
	RequiredObject: 'required-object-service-delete-page',
	ExtraObject: 'extra-object-service-delete-page',
}  

export default ServiceDeletePageState