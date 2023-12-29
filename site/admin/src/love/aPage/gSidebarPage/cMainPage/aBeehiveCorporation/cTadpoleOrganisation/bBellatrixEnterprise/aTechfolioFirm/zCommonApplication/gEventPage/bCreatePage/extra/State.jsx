const InitialState = {
	A: "Bro... Inside EventCreatePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const EventCreatePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-event-create-page':
			return {...state, FormObject: action.payload}
		case 'received-object-event-create-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-event-create-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-event-create-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-event-create-page',
	ReceivedObject: 'received-object-event-create-page',
	RequiredObject: 'required-object-event-create-page',
	ExtraObject: 'extra-object-event-create-page',
}  

export default EventCreatePageState