const InitialState = {
	A: "Bro... Inside EventUpdatePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const EventUpdatePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-event-update-page':
			return {...state, FormObject: action.payload}
		case 'received-object-event-update-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-event-update-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-event-update-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-event-update-page',
	ReceivedObject: 'received-object-event-update-page',
	RequiredObject: 'required-object-event-update-page',
	ExtraObject: 'extra-object-event-update-page',
}  

export default EventUpdatePageState