const InitialState = {
	A: "Bro... Inside EventRetrievePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const EventRetrievePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-event-retrieve-page':
			return {...state, FormObject: action.payload}
		case 'received-object-event-retrieve-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-event-retrieve-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-event-retrieve-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-event-retrieve-page',
	ReceivedObject: 'received-object-event-retrieve-page',
	RequiredObject: 'required-object-event-retrieve-page',
	ExtraObject: 'extra-object-event-retrieve-page',
}  

export default EventRetrievePageState