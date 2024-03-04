const InitialState = {
	A: "Bro... Inside EventDeletePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const EventDeletePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-event-delete-page':
			return {...state, FormObject: action.payload}
		case 'received-object-event-delete-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-event-delete-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-event-delete-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-event-delete-page',
	ReceivedObject: 'received-object-event-delete-page',
	RequiredObject: 'required-object-event-delete-page',
	ExtraObject: 'extra-object-event-delete-page',
}  

export default EventDeletePageState