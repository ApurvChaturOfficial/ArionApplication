const InitialState = {
	A: "Bro... Inside EventCardDeletePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const EventCardDeletePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-event-card-delete-page':
			return {...state, FormObject: action.payload}
		case 'received-object-event-card-delete-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-event-card-delete-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-event-card-delete-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-event-card-delete-page',
	ReceivedObject: 'received-object-event-card-delete-page',
	RequiredObject: 'required-object-event-card-delete-page',
	ExtraObject: 'extra-object-event-card-delete-page',
}  

export default EventCardDeletePageState