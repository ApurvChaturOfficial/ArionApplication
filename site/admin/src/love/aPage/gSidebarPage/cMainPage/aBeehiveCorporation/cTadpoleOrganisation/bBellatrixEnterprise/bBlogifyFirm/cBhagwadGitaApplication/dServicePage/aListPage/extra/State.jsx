const InitialState = {
	A: "Bro... Inside ServiceListPageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const ServiceListPageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-service-list-page':
			return {...state, FormObject: action.payload}
		case 'received-object-service-list-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-service-list-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-service-list-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-service-list-page',
	ReceivedObject: 'received-object-service-list-page',
	RequiredObject: 'required-object-service-list-page',
	ExtraObject: 'extra-object-service-list-page',
}  

export default ServiceListPageState