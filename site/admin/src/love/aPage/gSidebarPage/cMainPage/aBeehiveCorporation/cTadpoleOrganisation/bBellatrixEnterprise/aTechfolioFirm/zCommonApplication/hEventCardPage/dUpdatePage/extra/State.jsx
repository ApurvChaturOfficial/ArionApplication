const InitialState = {
	A: "Bro... Inside EventCardUpdatePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const EventCardUpdatePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-event-card-update-page':
			return {...state, FormObject: action.payload}
		case 'received-object-event-card-update-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-event-card-update-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-event-card-update-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-event-card-update-page',
	ReceivedObject: 'received-object-event-card-update-page',
	RequiredObject: 'required-object-event-card-update-page',
	ExtraObject: 'extra-object-event-card-update-page',
}  

export default EventCardUpdatePageState